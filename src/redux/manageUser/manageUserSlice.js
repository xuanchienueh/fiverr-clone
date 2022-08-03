import { createSlice } from "@reduxjs/toolkit";
import { TOKEN, USER_LOGIN } from "utils/setting/config";

let infoUserLoginInit = JSON.parse(localStorage.getItem(USER_LOGIN)) || {};

const initialState = {
  listUser: [],
  infoUserLogin: infoUserLoginInit,
  infoDetailUser: {},
};

const manageUserSlice = createSlice({
  name: "manageUserSlice",
  initialState,
  reducers: {
    getListUser: (state, { payload }) => {
      state.listUser = payload;
    },
    getInfoUserLogin: (state, { payload }) => {
      localStorage.setItem(TOKEN, payload.token);
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      state.infoUserLogin = payload;
    },
    getInfoDetailUser: (state, { payload }) => {
      state.infoDetailUser = payload;
    },
  },
});

export const { getListUser, getInfoUserLogin, getInfoDetailUser } = manageUserSlice.actions;
export default manageUserSlice.reducer;
