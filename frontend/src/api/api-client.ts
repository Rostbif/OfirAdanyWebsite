import { LoginFormData } from "../pages/Login";
import { RegisterFormData } from "../pages/Register";
import { ValidateTokenResponse } from "../../../backend/src/shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

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
