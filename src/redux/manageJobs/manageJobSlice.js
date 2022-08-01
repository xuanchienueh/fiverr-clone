import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listJobs: [],
  listJobBaseMainJob: [],
  resultSearchJobByName: [],
  listServiceUserBought: [],
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
    getlistServiceUserBought: (state, { payload }) => {
      state.listServiceUserBought = payload;
    },
  },
});

export const { getListJob, getListJobBaseMainJob, searchJobByName, getlistServiceUserBought } =
  manageJobSlice.actions;
export default manageJobSlice.reducer;
