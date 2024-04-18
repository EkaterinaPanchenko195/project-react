import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

type TTransitionToPost = {
  selectedPost: null | {
    id: number;
    image: string;
    title: string;
    description: string;
  };
  status: null | string;
  error: null | string;
};

export const fetchPost: any = createAsyncThunk(
  // получаем api
  "transitionPost/fetchPost",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/${id}/`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("что-то пошло не так");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const transitionToPost = createSlice({
  name: "transitionPost",
  initialState: {
    selectedPost: null,
    status: null,
    error: null,
  } as TTransitionToPost,
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchPost.pending, (state: any) => {
        // pending - в ожидании
        state.status = "loading";
        state.error = null;
        // console.log(current(state));
      }),
      builder.addCase(
        fetchPost.fulfilled,
        // fulfilled - выполнено
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.selectedPost = payload;
          console.log(current(state));
        }
      ),
      builder.addCase(
        fetchPost.rejected,
        // rejected -  отклоненный
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload;
        }
      )
    );
  },
});

const { actions, reducer } = transitionToPost;
export const {} = actions;
export default reducer;
