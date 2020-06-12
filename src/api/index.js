import { apiAxios } from "../utils/axios";
function querydata(url,params) {
  return apiAxios(url,params);
}
export { querydata };
