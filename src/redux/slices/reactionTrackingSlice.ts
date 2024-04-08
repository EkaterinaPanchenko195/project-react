import { createSlice } from "@reduxjs/toolkit";

const reactionTrackingSlice = createSlice({
  name: "reactionTracking",
  initialState: { like: 0, dislike: 0 },
  reducers: {
    increment: (state) => {
      state.like = ++state.like;
    },
    decrement: (state) => {
      state.dislike = ++state.dislike;
    },
  },
});

const { actions, reducer } = reactionTrackingSlice;
export const { increment, decrement } = actions;
export default reducer;
