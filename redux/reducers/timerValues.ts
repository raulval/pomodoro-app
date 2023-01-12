import { createSlice } from "@reduxjs/toolkit";

export interface TimerValuesState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

const initialState: TimerValuesState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

export const slice = createSlice({
  name: "timerValues",
  initialState,
  reducers: {
    setPomodoroTimer(state, { payload }) {
      state.pomodoro = payload;
    },
    setShortBreakTimer(state, { payload }) {
      state.shortBreak = payload;
    },
    setLongBreakTimer(state, { payload }) {
      state.longBreak = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPomodoroTimer, setShortBreakTimer, setLongBreakTimer } =
  slice.actions;

export const selectTimerValues = (state: { timerValues: TimerValuesState }) =>
  state.timerValues;

export default slice.reducer;
