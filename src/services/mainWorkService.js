const { BaseServices } = require("./baseServices");

class mainWork extends BaseServices {
  constructor() {
    super();
  }

  getListTypeMainJobService = () => {
    return this.get("type-jobs");
  };

  getDetailTypeMainJobService = (idMainJob) => {
    return this.get(`type-jobs/${idMainJob}`);
  };
}
export const mainWorkService = new mainWork();
