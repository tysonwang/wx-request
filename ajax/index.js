class Request {
  constructor(c, e) {
    const isBrowser = typeof document !== "undefined" ? XMLHttpRequest : null;
    Request.prototype.Fly = require("./flyio/core");
    Request.prototype.fly = new Request.prototype.Fly(isBrowser)
    const rp = Request.prototype
    const interceptors = rp.fly.interceptors；
    const fy = rp.fly
    interceptors.request.use((rq, promise) => {
      for (let attr in c) {
        if (attr != 'headers') {
          rq[attr] = c[attr];
        } else {
          for (let heads in c.headers) {
            rq.headers[heads] = c.headers[heads]
          }
        }
      }
      return rq
    })
    interceptors.response.use((rs) => {
      return rs.data
    }, (err) => {
      e[err.status] && e[err.status]();
      return Promise.reject(err)
    })
    rp.get = (url, params = {}, options) => {
      return fy.get(url, params, options)
    }
    rp.post = (url, params = {}, options) => {
      return fy.post(url, params, options)
    }
    rp.put = (url, params = {}, options) => {
      return fy.get(url, params, options)
    }
    rp.delete = (url, params = {}, options) => {
      return fy.get(url, params, options)
    }
  }
}