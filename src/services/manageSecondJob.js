import { BaseServices } from "./baseServices";

class secondJob extends BaseServices {
  constructor() {
    super();
  }

  createSecondJobService = (secondJob) => this.post(`sub-type-jobs`, secondJob); /* api 8 */
  getListSecondJobService = () => this.get(`sub-type-jobs`); /* api 9 */

  getDetailSecondJobService = (idJob) => this.get(`sub-type-jobs/${idJob}`); /* api 10 */

  updateSecondJobService = (idJob, model) => this.put(`sub-type-jobs/${idJob}`, model); /* api 11 */

  deleteScondJobService = (idJob) => this.delete(`sub-type-jobs/${idJob}`); /* api 12 */

  upLoadSeconJobImgService = (idJob, formData) =>
    this.post(`sub-type-jobs/upload-image/${idJob}`, formData); /* api 12.1 */
}

export const manageSecondJobService = new secondJob();
