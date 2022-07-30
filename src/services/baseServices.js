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

  putTokenAdmin = (url, model) => {
    return axios({
      method: "PUT",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: {
        token: `${tokenAdmin}`,
        tokenByClass,
      },
    });
  };

  postTokenAdmin = (url, model) => {
    return axios({
      method: "POST",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmRmODFkODRiNGMyNzAwMWM4MTBjMmIiLCJlbWFpbCI6ImdyZXRAZ21haWwuY29tIiwicm9sZSI6IkNMSUVOVCIsImlhdCI6MTY1ODk3NzA2OX0.PfXaPzPSAt28Bq0dZUu9SvEaGvRuVs_OP9_qX2QC1go`,
        tokenByClass,
      },
    });
  };
}
