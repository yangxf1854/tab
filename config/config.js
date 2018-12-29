let urls = {};
// 判断运行环境
let env = process.env.NODE_ENV || "develop";
// 获取网页域名
let pro = window.location.protocal;
let host = window.location.host;
urls.baseURL = env === "develop" ? "http://localhost:9000" : pro + "//" + host;

export default urls;
