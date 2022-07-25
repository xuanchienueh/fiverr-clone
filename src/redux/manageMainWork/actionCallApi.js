import { mainWorkService } from "services/mainWorkService";
import { getListMainWork, getsubTypeMainWork } from "./mainWorkSlice";
import { hideLoading, showLoading } from "redux/loading/loadingSlice";

export const getListTypeMainJobAction = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      let { status, data } = await mainWorkService.getListTypeMainJobService();
      if (status === 200) dispatch(getListMainWork(data));
      dispatch(hideLoading());
    } catch (err) {
      console.log("getListTypeMainJob fail", err);
      dispatch(hideLoading());
    }
  };
};

export const getDetailTypeMainJobAction = (idMainJob) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      let { status, data } = await mainWorkService.getDetailTypeMainJobService(idMainJob);
      status === 200 && dispatch(getsubTypeMainWork(data));
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      console.log("getDetailTypeMainJobAction fail", err);
    }
  };
};
