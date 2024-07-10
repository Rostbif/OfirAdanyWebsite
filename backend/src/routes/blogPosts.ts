import express, { Request, Response } from "express";

const router = express.Router();

// Want to have the CRUD for blog posts
// Get all blog posts, get a single blog post, create a blog post, update a blog post, delete a blog post

router.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default router;
