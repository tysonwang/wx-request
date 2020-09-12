import initRequest from './ajax/initRequest'
import createMethod from './ajax/createMethod'
import createInterceptors from './ajax/createInterceptors'
class Request {
  constructor (c,e) {
    this.config = c;
    this.errHandler = e;
    initRequest(Request)
    createInterceptors(Request)
    createMethod(Request)
  }
}