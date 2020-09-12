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
const http = new Request(config,errHandler)
export {
  http
}