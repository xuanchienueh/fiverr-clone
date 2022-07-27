import { hideLoading, showLoading } from "redux/loading/loadingSlice";
import { manageUserServices } from "services/manageUserServices";
import { getListUser, infoUserLogin } from "./manageUserSlice";

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
      if (status === 200) dispatch(infoUserLogin(data));
      navigate("/", { replace: true });
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      console.log("memberLoginAction fail", err);
    }
  };
};
