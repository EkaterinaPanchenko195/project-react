import { configureStore } from "@reduxjs/toolkit";
import isTopicColorReducer from "./slices/IsTopicColorSlice";
import reactionTrackingReducer from "./slices/reactionTrackingSlice";
import defoltPostCardDataReducer from "./slices/postXl";
import defoltPostCardMDataReducer from "./slices/postsM";
import defoltPostCardSDataReducer from "./slices/postsS";

const rootReducer = {
  // общий объект для всех slise
  isTopicColor: isTopicColorReducer,
  reactionTracking: reactionTrackingReducer,
  defoltPostCardData: defoltPostCardDataReducer,
  defoltPostCardMData: defoltPostCardMDataReducer,
  defoltPostCardSData: defoltPostCardSDataReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
