import { BaseServices } from "./baseServices";

class comment extends BaseServices {
  constructor() {
    super();
  }

  createCommentService = (comment) => this.post(`comments`, comment); /* api 33 */

  getCommentService = (idService) => this.get(`comments/by-job/${idService}`); /* api 34 */
}

export const manageComment = new comment();
