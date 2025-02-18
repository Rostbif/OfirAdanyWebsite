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
    <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">{blogPostData?.title}</h2>
      <hr className="border-gray-300 mb-4" />
      <h3 className="italic text-gray-700 mb-2">{blogPostData?.description}</h3>
      <p className="text-gray-500 mb-4">Author: Ofir Adany</p>
      <p className="text-gray-500 mb-4">Date: Feb 2, 2025 09:00</p>
      <p className="text-gray-700 leading-relaxed">{blogPostData?.content}</p>
    </div>
  );
};

export default BlogPost;
