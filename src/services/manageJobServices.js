import { BaseServices } from "./baseServices";

class manageJob extends BaseServices {
  constructor() {
    super();
  }
  createYourJobService = (model) => this.post(`jobs`, model); /* api 19 */

  getListJobService = () => this.get("jobs"); /* api 20 */

  deleteJobService = (idJob) => this.delete(`jobs/${idJob}`); /* api 21 */

  updateJobService = (idJob, model) => this.put(`jobs/${idJob}`, model); /* api 22 */

  getDetailJobService = (idJob) => this.get(`jobs/${idJob}`); /* api 23 */

  getListJobBaseMainJobService = (typeJobId) => {
    return this.get(`jobs/by-type?type=${typeJobId}&skip=0&llimit=20`); /* 25 */
  };
  bookService = (idService) => this.patch(`jobs/booking/${idService}`); /* api 26 */

  getListServiceUserBoughtService = () => this.get(`jobs/by-user`); /* api 27 */

  searchJobByNameService = (valueSearch) => this.get(`jobs/by-name?name=${valueSearch}`); /* 29 */

  uploadImgJobService = (idJob, formData) =>
    this.post(`jobs/upload-image/${idJob}`, formData); /* api 30 */
}

export const manageJobServices = new manageJob();
