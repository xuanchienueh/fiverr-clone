import { hideLoading, showLoading } from "redux/loading/loadingSlice";
import { manageUserServices } from "services/manageUserServices";
import { getInfoDetailUser, getListUser, getInfoUserLogin } from "./manageUserSlice";

export const getListUserAction = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      let { status, data } = await manageUserServices.getListUserService();
      if (status === 200) {
        dispatch(getListUser(data));
      }
      dispatch(hideLoading());
    } catch (err) {
      console.log("getListUserAction fail", err);
      dispatch(hideLoading());
    }
  };
};

export const memberLoginAction = (infoLogin, navigate) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { status, data } = await manageUserServices.memberLoginService(infoLogin);
      if (status === 200) dispatch(getInfoUserLogin(data));
      navigate("/", { replace: true });
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      console.log("memberLoginAction fail", err);
    }
  };
};

export const getInfoDetailUserAct = (userId) => {
  return async (dispatch, getState) => {
    try {
      let result = await manageUserServices.getInfoDetailUserService(userId);
      dispatch(getInfoDetailUser(result.data));
    } catch (err) {
      console.log("getInfoDetailUserAct fail", err);
    }
  };
};
