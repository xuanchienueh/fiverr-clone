import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMainWork: [],
  subTypeMainWork: {},
};

export const mainWorkSlice = createSlice({
  name: "mainWorkSlice",
  initialState,
  reducers: {
    getListMainWork: (state, { payload }) => {
      state.listMainWork = payload;
    },
    getsubTypeMainWork: (state, { payload }) => {
      state.subTypeMainWork = payload;
    },
  },
});

export const { getListMainWork, getsubTypeMainWork } = mainWorkSlice.actions;

export default mainWorkSlice.reducer;
