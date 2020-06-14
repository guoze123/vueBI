import {apiAxios} from "../utils/axios.js";
function querydata(url, params) {
  return apiAxios(url, params);
}
export default { querydata };
