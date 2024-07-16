import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("Default Title");
  const [content, setContent] = useState("Default Content");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <form className="flex-grow flex flex-col">
      <label className="flex flex-col">
        Post Title:
        <input
          type="text"
          placeholder="Insert Post Title"
          value={title}
          onChange={handleTitle}
        />
      </label>

      <label className="flex flex-col">
        Post Content:
        <textarea
          placeholder="Insert Post Title"
          value={content}
          onChange={handleContent}
        >
          {" "}
        </textarea>
      </label>
    </form>
  );
};

export default AddPost;
