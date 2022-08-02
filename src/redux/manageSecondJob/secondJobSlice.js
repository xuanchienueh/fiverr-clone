import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSecondJob: [],
};

export const secondJobSlice = createSlice({
  name: "secondJobSlice",
  initialState,
  reducers: {
    getListSecondJob: (state, { payload }) => {
      state.listSecondJob = payload;
    },
  },
});

export const { getListSecondJob } = secondJobSlice.actions;

export default secondJobSlice.reducer;
