import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const fetchLimitBlogM = createAsyncThunk(
  // получаем api
  "postCardMData/fetchPostCardMData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=4&offset=13"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("что-то пошло не так");
      }
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const defoltPostCardMData = createSlice({
  name: "postCardMData",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchLimitBlogM.pending, (state: any) => {
        // pending - в ожидании
        state.status = "loading";
        state.error = null;
        // console.log(current(state));
      }),
      builder.addCase(
        fetchLimitBlogM.fulfilled,
        // fulfilled - выполнено
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload.results;
        }
      ),
      builder.addCase(
        fetchLimitBlogM.rejected,
        // rejected -  отклоненный
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload;
        }
      )
    );
  },
});

const { actions, reducer } = defoltPostCardMData;
export const {} = actions;
export default reducer;
