import {
  config
} from "../config"
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

class Http {
  request(params) {
    return axios({
      url: params.url,
      method: params.method || 'get',
      headers: params.headers || {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        return res
      },
      error: function (err) {
        console.log('request error')
      }
    })
  }
}


export {
  Http
}