import express from "express";
import "dotenv/config";
import blogPostsRoutes from "./routes/blogPosts";
import categoriesRoutes from "./routes/categories";
import usersRoutes from "./routes/users"; // Import the usersRoutes module
import mongoose from "mongoose";

let connectionString = process.env.MONGODB_CONNECTION_STRING as string;
mongoose.connect(connectionString);

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/blog-posts", blogPostsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
