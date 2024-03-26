import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    storePosts: (state, action) => {
      state.allPosts = action.payload;
    },
    removePosts: (state, action) => {
      state.allPosts = [];
    },
  },
});

export const { storePosts, removePosts } = postSlice.actions;

export default postSlice.reducer;
