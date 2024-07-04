import PostCard from "../components/PostCard";

const Blog = () => {
  // I want to have a generated list of blog posts here
  // Each blog is going to have a title, a date, a photo and a short description
  // for each blog post I want to calculate the time for reading
  // The blog post entity itself is going to have also the content it self.
  // so I should generate a list of blog post cards.

  return (
    <div className="flex justify-center">
      <div className="font-bold">Blog Page</div>
      <PostCard
        title="Title"
        category="Tech"
        description="This is a short description of the blog post!"
      ></PostCard>
    </div>
  );
};

export default Blog;
