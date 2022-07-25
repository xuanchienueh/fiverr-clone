import { hideLoading, showLoading } from "redux/loading/loadingSlice";
import { manageJobServices } from "services/manageJobServices";
import { getListJob, getListJobBaseMainJob } from "./manageJobSlice";

export const getListJobAction = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      let { status, data } = await manageJobServices.getListJobService();
      if (status === 200) {
        dispatch(getListJob(data));
      }
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      console.log("getListJobAction fail", err);
    }
  };
};

export const getListJobBaseMainJobAction = (typeJobId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const { status, data } = await manageJobServices.getListJobBaseMainJobService(typeJobId);
      if (status === 200) dispatch(getListJobBaseMainJob(data));
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      console.log("getListJobBaseMainJobAction fail", err);
    }
  };
};
