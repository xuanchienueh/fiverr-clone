import { createSlice } from "@reduxjs/toolkit";
import { TOKEN, USER_LOGIN } from "utils/setting/config";

let infoUserLoginInit = JSON.parse(localStorage.getItem(USER_LOGIN)) || {};

const initialState = {
  listUser: [],
  infoUserLogin: infoUserLoginInit,
};

const manageUserSlice = createSlice({
  name: "manageUserSlice",
  initialState,
  reducers: {
    getListUser: (state, { payload }) => {
      state.listUser = payload;
    },
    infoUserLogin: (state, { payload }) => {
      localStorage.setItem(TOKEN, payload.token);
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      state.infoUserLogin = payload;
    },
  },
});

export const { getListUser, infoUserLogin } = manageUserSlice.actions;
export default manageUserSlice.reducer;
