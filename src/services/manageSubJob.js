import { BaseServices } from "./baseServices";

class subJob extends BaseServices {
  constructor() {
    super();
  }

  createSubJobService = (subJob) => this.post(`sub-type-jobs`, subJob); /* api 8 */
  getListSubJobService = () => this.get(`sub-type-jobs`); /* api 9 */

  getDetailSubJobService = (idJob) => this.get(`sub-type-jobs/${idJob}`); /* api 10 */

  updateSubJobService = (idJob, model) => this.put(`sub-type-jobs/${idJob}`, model); /* api 11 */

  deleteScondJobService = (idJob) => this.delete(`sub-type-jobs/${idJob}`); /* api 12 */

  upLoadSeconJobImgService = (idJob, formData) =>
    this.post(`sub-type-jobs/upload-image/${idJob}`, formData); /* api 12.1 */
}

export const manageSubJobService = new subJob();
