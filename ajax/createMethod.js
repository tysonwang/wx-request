export default function createMethod (rq) {
    const rp = rq.prototype
	const fy = rq.prototype.fly
  rp.get = (url, params = {},options) => {
    return fy.get(url, params, options)
  }
  rp.post = (url, params = {},options) => {
    return fy.post(url, params, options)
  }
  rp.put = (url, params = {},options) => {
    return fy.get(url, params, options)
  }
  rp.delete = (url, params = {},options) => {
    return fy.get(url, params, options)
  }
}