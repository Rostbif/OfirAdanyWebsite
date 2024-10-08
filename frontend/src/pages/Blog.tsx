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
  // I want to have a generated list of blog posts here
  // Each blog is going to have a title, a date, a photo and a short description
  // for each blog post I want to calculate the time for reading
  // The blog post entity itself is going to have also the content it self.
  // so I should generate a list of blog post cards.

  const navigate = useNavigate();
  Array.from({ length: 10 });
  // const posts: BlogPost[] = Array.from({ length: 10 }, (_, index) => ({
  //   title: `Post ${index + 1}`,
  //   category: `Category ${index + 1}`,
  //   description: `This is a long description for Post ${
  //     index + 1
  //   }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //   Sed euismod, nisi at aliquet aliquam.`,
  // }));

  const { data: posts2 } = useQuery<BlogPostType[]>(
    "getAllPosts",
    apiClient.getAllPosts
  );

  const handleClick = (postId) => {
    //console.log("Clicked on post: ", e);
    navigate(`/blogPost/${postId}`);
  };

  return (
    <div className={styles.blogPageContainer}>
      <div className="font-bold text-2xl py-8">Blog Page</div>
      <hr></hr>
      <div className={styles.postCardsContainer}>
        {posts2?.map((post) => {
          return (
            <PostCard
              key={post._id}
              title={post.title}
              categories={post.categories}
              description={post.description}
              content={post.content}
              onClick={() => handleClick(post._id)}
            ></PostCard>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
