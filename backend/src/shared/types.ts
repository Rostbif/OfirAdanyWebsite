export type BasicModelType = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BlogPostType = BasicModelType & {
  title: string;
  description: string;
  category: CategoryType;
  content: string;
  author: UserType;
};

export type CategoryType = BasicModelType & {
  name: string;
  description: string;
};

export type UserType = BasicModelType & {
  email: { type: String; required: true; unique: true };
  password: { type: String; required: true };
  firstName: { type: String; required: true };
  lastName: { type: String; required: true };
};
