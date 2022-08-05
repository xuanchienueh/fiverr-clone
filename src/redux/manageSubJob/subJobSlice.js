import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSubJob: [],
};

export const subJobSlice = createSlice({
  name: "subJobSlice",
  initialState,
  reducers: {
    getListSubJob: (state, { payload }) => {
      state.listSubJob = payload;
    },
  },
});

export const { getListSubJob } = subJobSlice.actions;

export default subJobSlice.reducer;
