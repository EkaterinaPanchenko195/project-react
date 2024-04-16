import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";


export const fetchLimitBlogXl = createAsyncThunk(
  // получаем api
  "postCardXLData/fetchPostCardMData",
  async (_, { rejectWithValue }) => {
    try { // попытаться сделать, то, что находится внутри try иначе catch
      const response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=1"
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

const defoltPostCardXLData = createSlice({
  name: "postCardXLData",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchLimitBlogXl.pending, (state: any) => {
        // pending - в ожидании
        state.status = "loading";
        state.error = null;
        // console.log(current(state));
      }),
      builder.addCase(
        fetchLimitBlogXl.fulfilled,
        // fulfilled - выполнено
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload.results;
        }
      ),
      builder.addCase(
        fetchLimitBlogXl.rejected,
        // rejected -  отклоненный
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload;
        }
      )
    );
  },
});

const { actions, reducer } = defoltPostCardXLData;
export const {} = actions;
export default reducer;