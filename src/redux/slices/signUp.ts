import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const fetchSignUp: any = createAsyncThunk(
  // получаем api
  "registrationUser/fetchSignUp",
  async ({ username, email, password }: any, { rejectWithValue }) => {
    try {
      const user = {
        username: username,
        email: email,
        password: password,
        course_group: 2,
      };
      console.log(user)
      const response = await fetch(
        `https://studapi.teachmeskills.by/auth/users/`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
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

const registration = createSlice({
  name: "registrationUser",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchSignUp.pending, (state: any) => {
        // pending - в ожидании
        state.status = "loading";
        state.error = null;
        // console.log(current(state));
      }),
      builder.addCase(
        fetchSignUp.fulfilled,
        // fulfilled - выполнено
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload.results;
          console.log("current resolved", current(state));
        }
      ),
      builder.addCase(
        fetchSignUp.rejected,
        // rejected -  отклоненный
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.posts = payload;
        }
      )
    );
  },
});

const { actions, reducer } = registration;
export const {} = actions;
export default reducer;
