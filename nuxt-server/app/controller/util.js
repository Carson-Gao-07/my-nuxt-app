var svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;

class UtilController extends Controller {
  async captcha() {
    var captcha = svgCaptcha.create();
    console.log(captcha);
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = UtilController;
