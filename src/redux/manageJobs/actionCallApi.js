import { manageJobServices } from "services/manageJobServices";
import { getListJob } from "./manageJobSlice";

export const getListJobAction = () => {
  return async (dispatch, getState) => {
    try {
      let { status, data } = await manageJobServices.getListJobService();
      if (status === 200) {
        dispatch(getListJob(data));
      }
    } catch (err) {
      console.log("getListJobAction fail", err);
    }
  };
};
