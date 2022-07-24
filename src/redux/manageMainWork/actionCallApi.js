import { mainWorkService } from "services/mainWorkService";
import { getListMainWork } from "./mainWorkSlice";

export const getListTypeMainJobAction = () => {
  return async (dispatch, getState) => {
    try {
      let { status, data } = await mainWorkService.getListTypeMainJobService();
      if (status === 200) {
        dispatch(getListMainWork(data));
      }
    } catch (err) {
      console.log("getListTypeMainJob fail", err);
    }
  };
};
