export type BasicModelType = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BlogPostType = BasicModelType & {
  title: string;
  description: string;
  categories: CategoryType[];
  content: string;
  author: UserType | null;
};

export type CategoryType = BasicModelType & {
  name: string;
  description: string;
};

export type UserType = BasicModelType & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type ValidateTokenResponse = {
  userId: string;
  userName: string;
};
