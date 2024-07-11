import mongoose, { Schema } from "mongoose";
import { BlogPostType } from "../shared/types";
import { categorySchema } from "./category";

const blogPostSchema = new mongoose.Schema<BlogPostType>(
  {
    title: {
      type: String,
      required: true,
    },
    category: [
      { type: Schema.Types.ObjectId, ref: "Category", required: true },
    ],
    description: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => {
          return value.length >= 5;
        },
        message: (props: { value: string }) =>
          "Description should be longer than 5 chars",
      },
    },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const BlogPost = mongoose.model<BlogPostType>(
  "BlogPost",
  blogPostSchema
);
