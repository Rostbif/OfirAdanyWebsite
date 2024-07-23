import { useQuery } from "react-query";
import * as apiClient from "../api/api-client";
import { useParams } from "react-router-dom";
import { BlogPostType } from "../../../backend/src/shared/types";

export type BlogPost = {
  title: string;
  category: string;
  description: string;
};

export type BlogPostProps = {
  blogPostId?: number;
  blogPostData?: BlogPost;
};

const BlogPost = () => {
  const { blogPostId } = useParams();

  // When the query data depends on variable, you should add it to the queryKey so the query will be unique
  // this will ensure that queries are cached independently, and that any time a variable changes, queries will be refetched automatically
  const { data: blogPostData } = useQuery<BlogPostType>({
    queryKey: ["getBlogPost", blogPostId],
    queryFn: () => apiClient.getPostById(blogPostId),
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-4 text-3xl font-bold">{blogPostData?.title}</h1>
      <hr className="bg-white" />
      <p className="grow">{blogPostData?.description}</p>
    </div>
  );
};

export default BlogPost;
