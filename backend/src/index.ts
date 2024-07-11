import express from "express";
import cors from "cors";
import "dotenv/config";
import blogPostsRoutes from "./routes/blogPosts";
import categoriesRoutes from "./routes/categories";
import usersRoutes from "./routes/users"; // Import the usersRoutes module
import authRoutes from "./routes/auth";
import mongoose from "mongoose";

let connectionString = process.env.MONGODB_CONNECTION_STRING as string;
mongoose.connect(connectionString);

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const port = 3000;

app.use(express.json());
app.use("/api/blog-posts", blogPostsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
