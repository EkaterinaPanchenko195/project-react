import { createSlice, current } from "@reduxjs/toolkit";

const savPosts = createSlice({
  name: "savPosts",
  initialState: [],
  reducers: {
    saves: (state: any, { payload }: { payload: any }) => {
      state = [...state, payload.payload]; // action
      console.log(payload);
    },
  },
});

const { actions, reducer } = savPosts;
export const { saves } = actions;
export default reducer;
