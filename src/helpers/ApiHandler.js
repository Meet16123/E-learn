import axios from 'axios';
import { isAuthenticated, getToken } from './session';

const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
};

const BASEURL = process.env.REACT_APP_SERVER_HOST;

class Api {
  isLoggedIn = false;

  constructor() {
    this.baseURL = BASEURL;
    this.getAuthenticationInfo();
  }

  getAuthenticationInfo() {
    if (isAuthenticated()) {
      this.isLoggedIn = true;
      this.accessToken = getToken();
    }
  }

  api(method, url, data) {
    this.getAuthenticationInfo();
    return new Promise((resolve, reject) => {
      let axiosConfig = {};
      axiosConfig.method = method;

      axiosConfig.url = this.baseURL + url;

      axiosConfig.headers = this.setHeaders(data);
      if (data) {
        if (data.params) axiosConfig.params = data.params;

        if (data.data) axiosConfig.data = data.data;
      }

      axios(axiosConfig)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log('ERROR', error.response);
          reject(error.response.data);
        });
    });
  }

  setHeaders(data) {
    let headers = {};
    headers['accept-language'] = 'en';
    headers['Content-Type'] = 'application/json';

    if (data) {
      if (data.isMultipart) {
        headers['Content-Type'] = 'multipart/form-data';
      }

      if (data.headers) {
        for (var key in data.headers) {
          if (data.headers.hasOwnProperty(key)) {
            headers[key] = data.headers[key];
          }
        }
      }
    }

    if (this.isLoggedIn !== false && !(data && data.skipAuth)) {
      headers['Authorization'] = 'Bearer ' + this.accessToken;
    }

    return headers;
  }

  get(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.GET, url, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.POST, url, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Api;
