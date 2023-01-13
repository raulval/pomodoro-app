import { configureStore } from "@reduxjs/toolkit";
import colors from "./reducers/colors";
import timerValuesReducer from "./reducers/timerValues";

export const store = configureStore({
  reducer: {
    timerValues: timerValuesReducer,
    colors: colors,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
