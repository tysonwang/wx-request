export default function initRequest (rq) {
  rq.prototype.Fly = require("./flyio/wx");
  rq.prototype.fly = new rq.prototype.Fly()
}
