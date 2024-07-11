import mongoose from "mongoose";
import { CategoryType } from "../shared/types";
// import {  } from "./base";

export const categorySchema = new mongoose.Schema<CategoryType>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category = mongoose.model<CategoryType>(
  "Category",
  categorySchema
);
