import { BaseServices } from "./baseServices";

class manageJob extends BaseServices {
  constructor() {
    super();
  }

  getListJobService = () => {
    return this.get("jobs");
  };
  getListJobBaseMainJobService = (typeJobId) => {
    return this.get(`jobs/by-type?type=${typeJobId}&skip=0&llimit=20`);
  };
}

export const manageJobServices = new manageJob();
