import { BaseServices } from "./baseServices";

class manageJob extends BaseServices {
  constructor() {
    super();
  }

  /* api 20 */
  getListJobService = () => {
    return this.get("jobs");
  };
  /* api 25 */
  getListJobBaseMainJobService = (typeJobId) => {
    return this.get(`jobs/by-type?type=${typeJobId}&skip=0&llimit=20`);
  };
  /* api 29 */
  searchJobByNameService = (valueSearch) => {
    return this.get(`jobs/by-name?name=${valueSearch}`);
  };
}

export const manageJobServices = new manageJob();
