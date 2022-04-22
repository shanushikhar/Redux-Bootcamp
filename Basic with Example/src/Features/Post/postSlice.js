import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learing Redux toolkit", content: "I've heard good thing" },
  { id: 2, title: "Learing react as well", content: "React is fun" },
];

export const counterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
export const selectAllPosts = (state) => state.posts;
export default counterSlice.reducer;
