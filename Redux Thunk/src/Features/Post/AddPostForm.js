import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllusers } from "../users/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllusers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const savePostHandler = (e) => {
    // e.preventDefault(); // if type="button" then no need for this
    if (title && content) {
      console.log(title, content);
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          {/* to give empty option first */}
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button disabled={!canSave} type="button" onClick={savePostHandler}>
          Save post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
