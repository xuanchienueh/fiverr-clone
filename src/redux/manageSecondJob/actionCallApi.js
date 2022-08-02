import { manageSecondJobService } from "services/manageSecondJob";
import { getListSecondJob } from "./secondJobSlice";

export const getListSecondJobAct = () => {
  return async (dispatch, getState) => {
    try {
      let result = await manageSecondJobService.getListSecondJobService();
      dispatch(getListSecondJob(result.data));
    } catch (err) {
      console.log("getListSecondJobAct fail", err);
    }
  };
};
