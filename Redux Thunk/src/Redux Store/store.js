import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Features/Post/postSlice";
import userReducer from "../Features/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
});
