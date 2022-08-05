import { manageSubJobService } from "services/manageSubJob";
import { getListSubJob } from "./subJobSlice";

export const getListSubJobAct = () => {
  return async (dispatch, getState) => {
    try {
      let result = await manageSubJobService.getListSubJobService();
      dispatch(getListSubJob(result.data));
    } catch (err) {
      console.log("getListSubJobAct fail", err);
    }
  };
};
