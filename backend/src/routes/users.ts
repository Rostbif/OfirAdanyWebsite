// Want to have CRUD for users
// Create user, get all users, get a single user, update a user, delete a user

import express, { Request, Response } from "express";
import { User } from "../models/user";

const router = express.Router();

// get all users
router.get("/", async (req: Request, res: Response) => {
  try {
    console.log("reached users routes");
    const users = await User.find().select(["firstName", "lastName"]);
    const usersStringified = JSON.stringify(users);
    //res.json(users);
    return res.status(200).json(users);
  } catch (e) {
    console.log("Something unexpected happened", e);
    return res.status(500).send({ message: "Error in fetching users" });
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    user = new User(req.body);
    await user.save();

    return res.status(200).send({ message: "User Registered successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ messase: "Something went wrong" });
  }
});

export default router;
