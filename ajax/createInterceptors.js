export default function createInterceptors(r) {
  const config = this.config;
  const errHandler = this.errHandler;
  const interceptors = r.prototype.fly.interceptors；
  const requestHandler = (rq) => {
    for (let attr in config) {
      if (attr != 'headers') {
        rq[attr] = config[attr];
      } else {
        for (let heads in config.headers) {
          rq.headers[heads] = config.headers[heads]
        }
      }
    }
    return rq
  }
  const responseSuccess = (rs) => {
    return rs.data
  }
  const responseError = (err) => {
    errHandler[err.status]&& errHandler[err.status]();
    return Promise.reject(err)
  }
  interceptors.request.use(requestHandler)
  interceptors.response.use(responseSuccess, responseError)
}