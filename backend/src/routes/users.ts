// Want to have CRUD for users
// Create user, get all users, get a single user, update a user, delete a user

import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    console.log("reached users routes");
    res.send("reached users routes");

    res.status(200);
  } catch (e) {
    console.log("Something unexpected happened", e);
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    console.log("Havn't implemented this yet");
    res.status(200);
  } catch (e) {
    console.log("Something unexpected happened", e);
  }
});

export default router;
