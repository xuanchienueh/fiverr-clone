import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listUser: [],
};

const manageUserSlice = createSlice({
  name: "manageUserSlice",
  initialState,
  reducers: {
    getListUser: (state, { payload }) => {
      state.listUser = payload;
    },
  },
});

export const { getListUser } = manageUserSlice.actions;
export default manageUserSlice.reducer;
