import { configureStore } from "@reduxjs/toolkit";
import mainWorkReducer from "./manageMainWork/mainWorkSlice";
import manageJobReducer from "./manageJobs/manageJobSlice";
import manageUserReducer from "./manageUser/manageUserSlice";
import loadingReducer from "./loading/loadingSlice";
import manageSecondJobReducer from "./manageSecondJob/secondJobSlice";

export const store = configureStore({
  reducer: {
    mainWorkReducer: mainWorkReducer,
    manageJobReducer: manageJobReducer,
    manageUserReducer: manageUserReducer,
    loadingReducer: loadingReducer,
    manageSecondJobReducer: manageSecondJobReducer,
  },
});
