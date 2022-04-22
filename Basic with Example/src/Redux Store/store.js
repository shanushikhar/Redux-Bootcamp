import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Features/Post/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
