import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import styles from "./Blog.module.css";
import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";

export type BlogPost = {
  title: string;
  category: string;
  description: string;
};

const Blog = () => {
  const navigate = useNavigate();
  const { data: posts2 } = useQuery<BlogPostType[]>(
    "getAllPosts",
    apiClient.getAllPosts
  );

  const handleClick = (postId) => {
    navigate(`/blogPost/${postId}`);
  };

  return (
    <div className="container mx-auto">
      <h1>Blog Page</h1>
      {/* <hr className="mb-8" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts2?.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            categories={post.categories}
            description={post.description}
            // don't need the content... TBD - remove
            content={post.content}
            onClick={() => handleClick(post._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
