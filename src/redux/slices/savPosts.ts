import { createSlice, current } from "@reduxjs/toolkit";

const savPosts = createSlice({
  name: "savPosts",
  initialState: [],
  reducers: {
    favorites: (state: any, { payload }: { payload: any }) => {
      // state = [...state, payload]; // action
      // console.log(state, payload);
      state.push(payload)
    },
  },
});

const { actions, reducer } = savPosts;
export const { favorites } = actions;
export default reducer;
