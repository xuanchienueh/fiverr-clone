const { BaseServices } = require("./baseServices");

class mainWork extends BaseServices {
  constructor() {
    super();
  }
  /* api 14 */
  getListTypeMainJobService = () => {
    return this.get("type-jobs");
  };
  /* api 17 */
  getDetailTypeMainJobService = (idMainJob) => {
    return this.get(`type-jobs/${idMainJob}`);
  };
}
export const mainWorkService = new mainWork();
