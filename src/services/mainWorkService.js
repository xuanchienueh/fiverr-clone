const { BaseServices } = require("./baseServices");

class mainWork extends BaseServices {
  constructor() {
    super();
  }

  getListTypeMainJobService = () => {
    return this.get("type-jobs");
  };
}
export const mainWorkService = new mainWork();
