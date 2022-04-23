import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const savePostHandler = (e) => {
    // e.preventDefault(); // if type="button" then no need for this
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Title</label>
        <textarea
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={savePostHandler}>
          Save post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
