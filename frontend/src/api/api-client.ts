import { LoginFormData } from "../pages/Login";
import { RegisterFormData } from "../pages/Register";
import {
  BlogPostType,
  CategoryType,
  UserType,
  ValidateTokenResponse,
} from "../../../backend/src/shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// const API_BASE_URL = "https://api.ofiradany.com";

// authentication
export const signIn = async (formData: LoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("couldn't logout");
  }
};

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody;
};

export const validateToken = async (): ValidateTokenResponse => {
  // keep in mind that even if we have catched the error,
  // chrome devtools write to the console any 400-500 responses
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

// Users
export const getAllAuthors = async (): Promise<UserType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/users`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("couldn't fetch authors");
  }

  return response.json();
};

// Categories
export const getAllCategories = async (): Promise<CategoryType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/categories`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("couldn't fetch categories");
  }

  return response.json();
};

// BlogPosts
export const AddPost = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/blog-posts`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Couldn't add post");
  }

  return response.json();
};

export const getAllPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/api/blog-posts`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Couldn't fetch blog-posts2");
  }

  return response.json();
};

export const getPostById = async (
  blogPostId: string
): Promise<BlogPostType> => {
  const response = await fetch(`${API_BASE_URL}/api/blog-posts/${blogPostId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Couldn't fetch blog post");
  }

  return response.json();
};
