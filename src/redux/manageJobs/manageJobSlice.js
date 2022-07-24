import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listJobs: [],
};

export const manageJobSlice = createSlice({
  name: "manageJobSlice",
  initialState,
  reducers: {
    getListJob: (state, { payload }) => {
      state.listJobs = payload;
    },
  },
});

export const { getListJob } = manageJobSlice.actions;
export default manageJobSlice.reducer;
