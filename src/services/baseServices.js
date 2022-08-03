import axios from "axios";
import { DOMAIN_API, TOKEN, tokenByClass } from "utils/setting/config";
const tokenAdmin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmUxZDBhYjRiNGMyNzAwMWM4MTFiMWUiLCJlbWFpbCI6ImNoaWVudWVoQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1ODk3MTM5N30.7v7DGyufVThCYI6A3zdw77vel3w8ej7aC1mqNym45-I";

export class BaseServices {
  post = (url, model) => {
    return axios({
      method: "POST",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: {
        token: `${localStorage.getItem(TOKEN)}`,
        tokenByClass,
      },
    });
  };

  get = (url) => {
    return axios({
      method: "GET",
      url: `${DOMAIN_API}/${url}`,
      headers: {
        token: `${localStorage.getItem(TOKEN)}`,
        tokenByClass,
      },
    });
  };

  delete = (url) => {
    return axios({
      method: "DELETE",
      url: `${DOMAIN_API}/${url}`,
      headers: {
        token: `${localStorage.getItem(TOKEN)}`,
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
        token: `${localStorage.getItem(TOKEN)}`,
        tokenByClass,
      },
    });
  };

  patch = (url, model) => {
    return axios({
      method: "PATCH",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: {
        token: `${localStorage.getItem(TOKEN)}`,
        tokenByClass,
      },
    });
  };
}
