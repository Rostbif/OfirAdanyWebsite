import express from "express";
import blogPostsRoutes from "./routes/blogPosts";

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.json());
app.use("/api/blog-posts", blogPostsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
