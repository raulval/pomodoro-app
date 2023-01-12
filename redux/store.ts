import { configureStore } from "@reduxjs/toolkit";
import timerValuesReducer from "./reducers/timerValues";

export const store = configureStore({
  reducer: {
    timerValues: timerValuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
