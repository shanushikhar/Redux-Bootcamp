import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learing Redux toolkit", content: "I've heard good thing" },
  { id: 2, title: "Learing react as well", content: "React is fun" },
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
