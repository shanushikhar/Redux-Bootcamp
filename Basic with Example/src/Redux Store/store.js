import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Features/Post/postSlice";
import TestReducer from "../Features/Post/TestingKit";
import userReducer from "../Features/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    nameFromStore_js: TestReducer,
    users: userReducer,
  },
});
