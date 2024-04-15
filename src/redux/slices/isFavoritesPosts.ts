import { createSlice } from "@reduxjs/toolkit";

const isFavoritesPosts = createSlice({
  name: "FavoritesPosts",
  initialState: false,
  reducers: {
    favoritPosts: (state, { payload }) => (state = payload),
  },
});

const { actions, reducer } = isFavoritesPosts;
export const { favoritPosts } = actions;
export default reducer;
