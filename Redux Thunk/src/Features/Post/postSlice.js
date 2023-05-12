import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        // prepare callback to handle extra/added fun of payload and can be used/trigger from any component
        return {
          payload: {
            id: nanoid(),
            title: title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsup: false,
              wow: false,
              heart: false,
              rocket: false,
              coffee: false,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        //existingPost.reactions[reaction]++;
        existingPost.reactions[reaction] = !existingPost.reactions[reaction];
      }
    },
  },
});
export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
