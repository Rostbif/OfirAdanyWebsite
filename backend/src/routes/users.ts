// Want to have CRUD for users
// Create user, get all users, get a single user, update a user, delete a user

import express, { Request, Response } from "express";
import { User } from "../models/user";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

const router = express.Router();

// get all users
router.get("/", async (req: Request, res: Response) => {
  try {
    console.log("reached users routes");
    const users = await User.find().select(["_id", "firstName", "lastName"]);
    const usersStringified = JSON.stringify(users);
    //res.json(users);
    return res.status(200).json(users);
  } catch (e) {
    console.log("Something unexpected happened", e);
    return res.status(500).send({ message: "Error in fetching users" });
  }
});

router.post(
  "/register",
  [
    check("firstName", "First name is required").isString(),
    check("lastName", "LAast name is required").isString(),
    check("email", "email required").isEmail(),
    check("password", "password is required").isString(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    try {
      if (
        req.body.email !== "ofiradany@gmail.com" &&
        req.body.email !== "test@gmail.com"
      ) {
        return res
          .status(400)
          .send({ message: "What do you think? you can hack me?" });
      }

      let user = await User.findOne({
        email: req.body.email,
      });

      if (user) {
        return res.status(400).send({ message: "User already exists" });
      }

      user = new User(req.body);
      await user.save();

      // generating token for client
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );

      // returning the token as cookie
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      return res.status(200).send({ message: "User Registered successfully" });
    } catch (e) {
      console.log(e);
      res.status(500).send({ messase: "Something went wrong" });
    }
  }
);

export default router;
