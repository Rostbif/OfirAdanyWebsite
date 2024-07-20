import express, { Request, Response } from "express";
import { BlogPost } from "../models/blogPost";

const router = express.Router();

// Want to have the CRUD for blog posts
// Get all blog posts, get a single blog post, create a blog post, update a blog post, delete a blog post

router.get("/", async (req: Request, res: Response) => {
  try {
    const blogPosts = await BlogPost.find()
      .sort("-updatedAt")
      .populate({ path: "categories", select: "name" })
      .populate({ path: "author", select: "firstName lastName" })
      .exec();

    return res.status(200).json(blogPosts);
  } catch (error) {
    console.log("Error in creating a blog post:", error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const blogPost = await new BlogPost(req.body);
    const savedBlogPost = await blogPost.save();
    return res.status(201).json(savedBlogPost);
  } catch (error) {
    console.log("Error in creating a blog post:", error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

export default router;
