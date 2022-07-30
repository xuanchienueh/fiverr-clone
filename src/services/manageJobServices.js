import { BaseServices } from "./baseServices";

class manageJob extends BaseServices {
  constructor() {
    super();
  }

  getListJobService = () => this.get("jobs"); /* api 20 */

  getListJobBaseMainJobService = (typeJobId) => {
    return this.get(`jobs/by-type?type=${typeJobId}&skip=0&llimit=20`); /* 25 */
  };
  searchJobByNameService = (valueSearch) => this.get(`jobs/by-name?name=${valueSearch}`); /* 29 */
}

export const manageJobServices = new manageJob();
