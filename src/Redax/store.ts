import { configureStore } from "@reduxjs/toolkit";
import isTopicColorReducer from "./slices/IsTopicColorSlice";
import reactionTrackingReducer from "./slices/reactionTrackingSlice";

const rootReducer = {
  // общий объект для всех slise
  isTopicColor: isTopicColorReducer,
  reactionTracking: reactionTrackingReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
