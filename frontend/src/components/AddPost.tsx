import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../api/api-client";
import { useAppContext } from "../contexts/AppContext";

export type AddPostFormData = {
  title: string;
  description: string;
  content: string;
  author: number;
  categories: number[];
};

const AddPost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddPostFormData>();
  const { showToast } = useAppContext();

  // fetch data needed for the add post form
  const { data: authors } = useQuery("getAuthors", apiClient.getAllAuthors);
  const { data: categories } = useQuery("getUsers", apiClient.getAllCategories);

  // define the mutation for sending the form
  const mutation = useMutation(apiClient.AddPost, {
    onSuccess: () => {
      // log, toast
      console.log("post Added");
      showToast({ type: "Success", message: "Post Added!" });
    },
    onError: (error) => {
      console.log(error);
      showToast({ type: "Error", message: "Failed to add post!" });
      // log, toast
    },
  });
  /*
Todo:
1. fix the fact that we call the server many times.

*/

  const onSubmit = handleSubmit((data) => {
    // the mutation logic
    mutation.mutate(data);
  });

  return (
    <form className="flex-grow flex flex-col" onSubmit={onSubmit}>
      <label className="flex flex-col">
        Post Title:
        <input
          type="text"
          placeholder="Insert Post Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm"> {errors.title.message}</span>
        )}
      </label>

      <label className="flex flex-col">
        Author:
        <select
          placeholder="Insert Post Title"
          {...register("author", { required: true })}
        >
          {authors?.map((author) => (
            <option key={author._id} value={author._id}>
              {" "}
              {author.firstName + " " + author.lastName}{" "}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col">
        Categories:
        <select
          placeholder="Insert Post Title"
          multiple={true}
          {...register("categories", { required: true })}
        >
          {categories?.map((category) => (
            <option key={category._id} value={category._id}>
              {" "}
              {category.name}{" "}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col">
        Description:
        <textarea
          placeholder="Insert Post Title"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && (
          <span className="text-red-500 text-sm">
            {" "}
            {errors.description.message}
          </span>
        )}
      </label>

      <label className="flex flex-col">
        Content:
        <textarea
          placeholder="Insert Post Title"
          {...register("content", { required: true })}
        >
          {" "}
        </textarea>
        {errors.content && (
          <span className="text-red-500 text-sm">
            {" "}
            {errors.content.message}
          </span>
        )}
      </label>

      <button type="submit">Save Post!</button>
    </form>
  );
};

export default AddPost;
