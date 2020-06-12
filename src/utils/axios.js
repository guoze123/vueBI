/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import qs from "qs";
import { Loading } from "element-ui";
let loading; //定义loading变量
let needLoadingRequestCount = 0;
function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}
axios.defaults.baseURL = "https://www.easy-mock.com/mock/";
// 请求超时时间
axios.defaults.timeout = 1000 * 60;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  (config) => {
    showFullScreenLoading();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    tryHideFullScreenLoading();
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

function apiAxios(url, params) {
  return new Promise((resolve, reject) => {
    let options = {
      contentType: "application/json;charset=UTF-8",
      method: "post",
      params: {},
    };
    options = {
      ...options,
      ...params,
    };
    if (options.contentType.includes("application/x-www-form-urlencoded")) {
      options.params = qs.stringify(options.params);
    }
    axios({
      method: method,
      url: url,
      data: options.params,
      headers: {
        "content-type": options.contentType,
      },
    })
      .then(function(res) {
        resolve(res);
      })
      .then(function(err) {
        reject(err);
      });
  });
}

function startLoading() {
  //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: "加载中……",
    background: "rgba(0, 0, 0, 0.7)",
  });
}
function endLoading() {
  //使用Element loading-close 方法
  loading.close();
}

export default{
    apiAxios
}
