import { BaseServices } from "./baseServices";

class users extends BaseServices {
  constructor() {
    super();
  }

  getListUserService = () => {
    return this.get("users");
  };
}

export const manageUserServices = new users();
