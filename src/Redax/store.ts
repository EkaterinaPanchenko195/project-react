import { configureStore } from "@reduxjs/toolkit";
import isTopicColorReducer from "./slice";

const rootReducer = { // общий объект для всех slise
  isTopicColor: isTopicColorReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store