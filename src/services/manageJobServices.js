import { BaseServices } from "./baseServices";

class manageJob extends BaseServices {
  constructor() {
    super();
  }

  getListJobService = () => {
    return this.get("jobs");
  };
}

export const manageJobServices = new manageJob();
