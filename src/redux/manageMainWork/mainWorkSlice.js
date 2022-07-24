import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMainWork: [],
};

export const mainWorkSlice = createSlice({
  name: "mainWorkSlice",
  initialState,
  reducers: {
    getListMainWork: (state, { payload }) => {
      state.listMainWork = payload;
    },
  },
});

export const { getListMainWork } = mainWorkSlice.actions;

export default mainWorkSlice.reducer;
