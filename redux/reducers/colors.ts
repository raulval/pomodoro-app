import { createSlice } from "@reduxjs/toolkit";

export interface ColorsState {
  color: string;
}

const initialState: ColorsState = {
  color: "color1",
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