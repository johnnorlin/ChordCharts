import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./slices/audioSlice.ts";

export const store = configureStore({
  reducer: {
    audio: audioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
