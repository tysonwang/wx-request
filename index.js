import Request from './ajax'
/**
请求配置
const config = {
  baseUrl:'',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  responseType: 'json',

}

错误处理
const errHandler = {
  '401':()=>{},
  '500':()=>{},
  'default':()=>{}
}
 */

// 该版本兼容小程序 与web 可拿来直接使用
const http = new Request(config,errHandler)
export {
  http
}