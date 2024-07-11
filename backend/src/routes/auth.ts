import express, { Request, Response } from "express";
import { User } from "../models/user";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // here insert decrypt mechanism
    const isMatch = user?.password === password;
    if (!isMatch) {
      res.status(400).json({ message: " Invalid credentials" });
    }

    // implement here the cookie mechanism
    return res.status(200).json({ messasge: "Successfull login" });
  } catch (error) {
    console.log("Error has been occured", error);
    res.status(400).json({ message: "Error while login" });
  }
});

export default router;
