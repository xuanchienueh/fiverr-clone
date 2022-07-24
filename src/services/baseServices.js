import axios from "axios";
import { DOMAIN_API, TOKEN, tokenByClass } from "utils/setting/config";

export class BaseServices {
  post = (url, model) => {
    return axios({
      method: "POST",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: {
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
        tokenByClass,
      },
    });
  };

  get = (url) => {
    return axios({
      method: "GET",
      url: `${DOMAIN_API}/${url}`,
      headers: {
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
        tokenByClass:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo",
      },
    });
  };

  delete = (url) => {
    return axios({
      method: "DELETE",
      url: `${DOMAIN_API}/${url}`,
      headers: {
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
        tokenByClass,
      },
    });
  };

  put = (url, model) => {
    return axios({
      method: "PUT",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: {
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
        tokenByClass,
      },
    });
  };
}
