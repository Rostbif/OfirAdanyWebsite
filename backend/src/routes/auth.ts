import express, { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import verifyToken from "../middleware/authMiddleware";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isString(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials`" });
      }
      // here insert decrypt mechanism
      const isMatch = await bcrypt.compare(password, user.password);

      //const isMatch = user?.password === password;
      if (!isMatch) {
        res.status(400).json({ message: "Invalid credentials" });
      }

      // implement here the jwt token creation
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );

      // implement here the cookie mechanism and jwt attachment
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      return res.status(200).json({ messasge: "Successfull login" });
    } catch (error) {
      console.log("Error has been occured", error);
      res.status(400).json({ message: "Error while login" });
    }
  }
);

router.get(
  "/validate-token",
  verifyToken,
  async (req: Request, res: Response) => {
    const user = await User.findById(req.userId);

    res.status(200).json({ userId: req.userId, userName: user?.firstName });
  }
);

router.post("/logout", (req: Request, res: Response) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });
  res.send();
});

export default router;
