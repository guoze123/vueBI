import axios from "axios";
import qs from "qs";
switch (process.env.NODE_ENV) {
  case "production":
    axios.defaults.baseURL = "https://www.easy-mock.com/mock/";
    break;

  default:
    axios.defaults.baseURL = "https://www.easy-mock.com/mock/";
    break;
}
axios.defaults.timeout = 1000 * 60;
axios.defaults.withCredentials = true;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
axios.defaults.transformRequest = data => qs.stringify(data);
axios.interceptors.request.use(
  config => {
    showFullScreenLoading();
    // 在头部添加信息
    // let token = localStorage.getItem('token');
    // token && (config.headers.key = token)
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 自定义 相应 返回的 http状态码
// axios.defaults.validateStatus= status =>{
//     return /^(2|3)\d{2}$/.test(status)
// }

axios.interceptors.response.use(
  response => {
    tryHideFullScreenLoading();
    return Promise.resolve(response.data);
  },
  error => {
    let { response } = error;
    if (response) {
      // 服务器有返回结果
      return Promise.reject(error.response);
    } else {
      // 断网处理
      if (!window.navigator.onLine) {
        return;
      }
      return Promise.reject(error);
    }
  }
);

export default axios;
