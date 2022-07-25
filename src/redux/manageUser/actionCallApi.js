import { hideLoading, showLoading } from "redux/loading/loadingSlice";
import { manageUserServices } from "services/manageUserServices";
import { getListUser } from "./manageUserSlice";

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
