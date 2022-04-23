import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Features/Post/postSlice";
import userReducer from "../Features/Post/users";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    nameFromStore_js: userReducer,
  },
});
