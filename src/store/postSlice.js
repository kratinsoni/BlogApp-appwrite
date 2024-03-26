import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    storePosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    removePosts: (state, action) => {
      state.posts = null;
    },
  },
});

export const { storePosts, removePosts } = postSlice.actions;

export default postSlice.reducer;
