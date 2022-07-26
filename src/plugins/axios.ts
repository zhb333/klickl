import axios from "axios";

const http = axios.create({
  baseURL: "",
  timeout: 20000,
  validateStatus: (status) => status >= 200 && status < 500,
});
// 添加自定义实例响应拦截器
http.interceptors.response.use(
  (response) => {
    const { config, status } = response;
    // console.log(
    //   `[RESPONSE] ${config.url}:`,
    //   response.data ? response.data : response
    // );
    if (status !== 200) return new Error(status.toString());
    return response;
  },
  (error) => {
    console.error("[RESPONSE]:", error?.config.url, error?.message);
    return error;
  }
);
export default http;
