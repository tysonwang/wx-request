# 请求的封装

```javascript
//在使用前需要向wx-request的index.js里的Request对象传入config配置 与 错误处理对象errHandler 
const config = {
  baseUrl:'',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  responseType: 'json',

}

const errHandler = {
  '401':()=>{},
  '500':()=>{},
  'default':()=>{}
}
const http = new Request(config,errHandler)
export {
  http
}
// 方法一 ：
async gets(){
  let res = await http.get(url,options)
}
// 方法二 ：
async gets(){
  let res await http.get(url,options,config})
}
// 由于http的原型已经挂载到fly上 因此http可以访问fly上绑定的任何方法 
 方法二 ：async getall(){
  let res = await http.all(promise1，promise2,...)
}
// 方法二 ：
 async request(){
  await http.request(url,fly.options,config)   
 }

```

**不足之处敬请谅解！**