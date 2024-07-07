import express from "express";
import "dotenv/config";
import blogPostsRoutes from "./routes/blogPosts";
import mongoose from "mongoose";

let connectionString = process.env.MONGODB_CONNECTION_STRING as string;
mongoose.connect(connectionString);

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/blog-posts", blogPostsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
