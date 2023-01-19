import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../shared/data";

export interface ColorsState {
  color: string;
}

const initialState: ColorsState = {
  color: colors[0],
};

export const slice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColor(state, { payload }) {
      state.color = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setColor } = slice.actions;

export const selectColors = (state: { colors: ColorsState }) => state.colors;

export default slice.reducer;
