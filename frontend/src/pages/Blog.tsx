import PostCard from "../components/PostCard";
import styles from "./Blog.module.css";

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
  // let blogPosts = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // Generate 10 posts

  Array.from({ length: 10 });
  const posts: BlogPost[] = Array.from({ length: 10 }, (_, index) => ({
    title: `Post ${index + 1}`,
    category: `Category ${index + 1}`,
    description: `This is a long description for Post ${
      index + 1
    }. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed euismod, nisi at aliquet aliquam.`,
  }));

  return (
    <div className={styles.blogPageContainer}>
      <div className="font-bold text-2xl py-8">Blog Page</div>
      <hr></hr>
      <div className={styles.postCardsContainer}>
        {posts.map((post) => {
          return (
            <PostCard
              title={post.title}
              category={post.category}
              description={post.description}
            ></PostCard>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
