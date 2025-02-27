import express from "express";
import cors from "cors";
import "dotenv/config";

import blogPostsRoutes from "./routes/blogPosts";
import categoriesRoutes from "./routes/categories";
import usersRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

let connectionString = process.env.MONGODB_CONNECTION_STRING as string;
mongoose.connect(connectionString);

const path = require("path");
const app = express();

let frontendRealURL = true;
// switch (process.env.NODE_ENV) {
//   case "pre-prod":
//     frontendRealURL = "http://localhost:3000";
//     break;
//   case "production":
//     frontendRealURL = "https://www.ofiradany.com";
//     break;
//   default:
//     frontendRealURL = process.env.FRONTEND_URL;
//     break;
// }

// Adding middlewares to the app
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: frontendRealURL,
    credentials: true,
  })
);

// Added rate limiter by copilot recommendation (TBD - learn more about that)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

const port = 3000;

// Adding the routes to the app
app.use("/api/blog-posts", blogPostsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// only for dev mod using the build frontend files, when I want to host the static files with my node server...
if (
  process.env.NODE_ENV === "pre-prod" ||
  process.env.NODE_ENV === "production"
) {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  // The "catchall" handler: for any request that doesn't match one above, send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
  });
}

app.listen(port, "0.0.0.0", () => {
  console.log(`Hi Ofir! Server running at http://0.0.0.0:${port}`);
});
