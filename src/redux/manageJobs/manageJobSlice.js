import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listJobs: [],
  listJobBaseMainJob: [],
};

export const manageJobSlice = createSlice({
  name: "manageJobSlice",
  initialState,
  reducers: {
    getListJob: (state, { payload }) => {
      state.listJobs = payload;
    },
    getListJobBaseMainJob: (state, { payload }) => {
      state.listJobBaseMainJob = payload;
    },
  },
});

export const { getListJob, getListJobBaseMainJob } = manageJobSlice.actions;
export default manageJobSlice.reducer;
