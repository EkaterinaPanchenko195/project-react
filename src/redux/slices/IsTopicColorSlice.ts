import { createSlice } from "@reduxjs/toolkit";

const isTopicColorSlice = createSlice({
  name: "isTopicColor",
  initialState: true,
  reducers: {
    toggleColor: (state) => !state, // action
  },
});

const { actions, reducer } = isTopicColorSlice;
export const { toggleColor } = actions;
export default reducer;
