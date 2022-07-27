import { BaseServices } from "./baseServices";

class users extends BaseServices {
  constructor() {
    super();
  }

  getListUserService = () => {
    return this.get("users");
  };

  customerRegisterService = (infoRegister) => {
    return this.post("auth/signup", infoRegister);
  };

  memberLoginService = (infoLogin) => {
    return this.post(`auth/signin`, infoLogin);
  };
}

export const manageUserServices = new users();
