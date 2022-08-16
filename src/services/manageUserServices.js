import { BaseServices } from "./baseServices";

class users extends BaseServices {
  constructor() {
    super();
  }

  getListUserService = () => this.get("users"); /* api 1 */
  createAdminUserService = (infoRegister) => this.post(`users`, infoRegister); /* api 2 */
  getInfoDetailUserService = (userId) => this.get(`users/${userId}`); /* api 3 */
  updateInfoUserService = (userId, infoUpdate) =>
    this.put(`users/${userId}`, infoUpdate); /* api 4 */

  deleteUserService = (userId) => this.delete(`users/${userId}`); /* api 5 */
  uploadAvatarService = (formData) => this.post(`users/upload-avatar`, formData); /* api 6 */

  searchUserService = (valueSearch) => {
    /* api 7 */
    return this.get(`users/pagination-search?name=${valueSearch}&skip=0&limit=3`);
  };

  customerRegisterService = (infoRegister) => this.post("auth/signup", infoRegister); /* api 31 */

  memberLoginService = (infoLogin) => this.post(`auth/signin`, infoLogin); /* api 32 */
}

export const manageUserServices = new users();
