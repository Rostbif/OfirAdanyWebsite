export type BlogPost = {
  title: string;
  category: string;
  description: string;
};

export type BlogPostProps = {
  blogPostId?: number;
  blogPostData?: BlogPost;
};

const BlogPost = ({ blogPostId = 1, blogPostData }: BlogPostProps) => {
  if (blogPostId === undefined || blogPostData === undefined) {
    blogPostId = 2;
    blogPostData = {
      title: "Post 1",
      category: "Category 1",
      description:
        "This is a long description for Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi at aliquet aliquam.",
    };
  }

  let desc: string = "";
  //const blogPostIdString = blogPostId?.toString();
  //desc = blogPostData.description.repeat(6);
  desc = Array(10).fill(blogPostData?.description).join(" ");

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-4 text-3xl font-bold">{blogPostData.title}</h1>
      <hr className="bg-white" />
      <p className="grow">{desc}</p>
    </div>
  );
};

export default BlogPost;
