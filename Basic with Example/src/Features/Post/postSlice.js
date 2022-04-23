import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learing Redux toolkit", content: "I've heard good thing" },
  { id: 2, title: "Learing react as well", content: "React is fun" },
];

export const postSlice = createSlice({
  name: "heyman",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        // prepare callback to handle extra/added fun of payload and can be used/trigger from any component
        return {
          payload: {
            id: nanoid(),
            title: title,
            content,
          },
        };
      },
    },
  },
});
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
