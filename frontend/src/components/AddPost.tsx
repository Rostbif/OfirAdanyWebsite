import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api/api-client";
import { useAppContext } from "../contexts/AppContext";

export type AddPostFormData = {
  title: string;
  description: string;
  content: string;
  authorId: number;
  categoriesIds: number[];
};

const AddPost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddPostFormData>();
  const { showToast } = useAppContext();

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
3. Understand the best practice for fetching data for the component in react (plain fetch? use query? use effect?)
1. pull the list of categories
2. pull the list of authors
4. Create the select components -> regular select for author, multiselect for categories

*/

  const onSubmit = handleSubmit((data) => {
    // the mutation logic
    mutation.mutate(data);
  });

  return (
    <form className="flex-grow flex flex-col" onSubmit={() => onSubmit(data)}>
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
        <select multiple={false} placeholder="Insert Post Title">
          <option>Ofir</option>
          <option>Test</option>
        </select>
      </label>

      <label className="flex flex-col">
        Categories:
        <select placeholder="Insert Post Title" multiple={true}>
          <option>Tuna</option>
          <option>Lafa</option>
        </select>
      </label>

      <label className="flex flex-col">
        Description:
        <textarea
          placeholder="Insert Post Title"
          {...register("description", { required: true })}
        >
          {" "}
        </textarea>
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
    </form>
  );
};

export default AddPost;
