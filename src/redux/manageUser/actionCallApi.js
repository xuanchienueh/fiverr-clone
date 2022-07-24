import { manageUserServices } from "services/manageUserServices";
import { getListUser } from "./manageUserSlice";

export const getListUserAction = () => {
  return async (dispatch, getState) => {
    try {
      let { status, data } = await manageUserServices.getListUserService();
      if (status === 200) {
        dispatch(getListUser(data));
      }
      console.log(data);
    } catch (err) {
      console.log("getListUserAction fail", err);
    }
  };
};
