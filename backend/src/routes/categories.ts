import express, { Request, Response } from "express";
import { Category } from "../models/category";
import { BlogPostType, CategoryType } from "../shared/types";

// router
const router = express.Router();

// Get all categories
router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().sort("name");
    res.json(categories);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server fetching categories" });
  }
});

// Get a single category
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server fetching a category" });
  }
});

// create a category
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log("Reached create a category:", req.body);
    const newCategory: CategoryType = req.body;
    const category = new Category(newCategory);
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    console.log("error in creating hotel", error);
    res.status(500).send({ message: "Error in creating hotel" });
  }
});

// update a category
router.put("/:categoryId", async (req: Request, res: Response) => {
  try {
    const updatedCategory: CategoryType = req.body;
    const category = await Category.findOneAndUpdate(
      { _id: req.params.categoryId },
      updatedCategory,
      { new: true }
    );

    return res.status(201).json(category);
  } catch (error) {}
});

export default router;
