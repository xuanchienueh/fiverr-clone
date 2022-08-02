const { BaseServices } = require("./baseServices");

class mainWork extends BaseServices {
  constructor() {
    super();
  }

  createMainJobService = (mainJob) => this.post(`type-jobs`, mainJob); /* api 13 */

  getListTypeMainJobService = () => this.get("type-jobs"); /* api 14 */

  deleteMainJobService = (idMainJob) => this.delete(`type-jobs/${idMainJob}`); /* api 15 */

  updateMainJobService = (idMainJob, value = {}) =>
    this.put(`type-jobs/${idMainJob}`, value); /* api16 */

  getDetailTypeMainJobService = (idMainJob) => this.get(`type-jobs/${idMainJob}`); /* api 17 */
}

export const mainWorkService = new mainWork();
