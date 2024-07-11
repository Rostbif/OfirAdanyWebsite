import mongoose, { Schema } from "mongoose";
import { UserType } from "../shared/types";

const userSchema = new Schema<UserType>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<UserType>("User", userSchema);
