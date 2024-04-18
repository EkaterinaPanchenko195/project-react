
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";


export const fetchLimitBlogS = createAsyncThunk(
  // получаем api
  "postCardSData/fetchPostCardMData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=6&offset=10"
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

const defoltPostCardSData = createSlice({
  name: "postCardSData",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchLimitBlogS.pending, (state: any) => {
        // pending - в ожидании
        state.status = "loading";
        state.error = null;
        // console.log(current(state));
      }),
      builder.addCase(
        fetchLimitBlogS.fulfilled,
        // fulfilled - выполнено
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload.results;
        }
      ),
      builder.addCase(
        fetchLimitBlogS.rejected,
        // rejected -  отклоненный
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload;
          // console.log(current(state));
        }
      )
    );
  },
});

const { actions, reducer } = defoltPostCardSData;
export const {} = actions;
export default reducer;