import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listJobs: [],
  listJobBaseMainJob: [],
  resultSearchJobByName: [],
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
    searchJobByName: (state, { payload }) => {
      state.resultSearchJobByName = payload;
    },
  },
});

export const { getListJob, getListJobBaseMainJob, searchJobByName } = manageJobSlice.actions;
export default manageJobSlice.reducer;
