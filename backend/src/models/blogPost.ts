import mongoose, { Schema } from "mongoose";
import { BlogPostType } from "../shared/types";
import { categorySchema } from "./category";

// const baseSchema = new mongoose.Schema({
//   createdAt: {
//     type: Date,
//     immutable: true,
//     required: true,
//     default: () => Date.now(),
//   },
//   updatedAt: { type: Date, required: true, default: () => Date.now() },
// });

const blogPostSchema = new mongoose.Schema<BlogPostType>(
  {
    title: {
      type: String,
      required: true,
    },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
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

//.add(baseSchema);

// baseSchema.pre("save", function (next) {
//   this.updatedAt = new Date(Date.now());
//   if (!this.createdAt) {
//     this.createdAt = new Date(Date.now());
//   }
//   next();
// });

export const BlogPost = mongoose.model<BlogPostType>(
  "BlogPost",
  blogPostSchema
);
