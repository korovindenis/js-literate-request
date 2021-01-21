interface ParamGetReq {
  type: string;
  url: string;
  returnJson?: boolean;
  success?: (...arg: Array<string>)=>{}; 
  error?: ()=>{};
};
interface ParamPostReq extends ParamGetReq{
  data?: string
};
interface ParamJsonReq extends ParamPostReq{
  returnJson?: boolean;
};
type ResultResponse  = string | any;

export default class {
  postCharset: string = "UTF-8";

  /**
   * @param {string} type 
   * @param {string} url
   * @param {function} success 
   * @param {function} error 
   */
  _req = (p: ParamJsonReq): any => {
    let req = new XMLHttpRequest();
    req.open(p.type, p.url, true);
    req.onerror = p.error;
    
    if (p.type == "post") req.setRequestHeader('Content-Type',`application/x-www-form-urlencoded; charset=${this.postCharset}`);

    req.onload = function() {
      if (this.status < 400 && this.status >= 200) {
        const resp: ResultResponse = p.returnJson ? JSON.parse(this.response) : this.response;
        p.success(resp);
      } else {
        p.error();
      }
    };
    if (p.type == "post"){
      req.send(p.data);
    } else {
      req.send();
    }
  }
  /**
   * @param {string} url
   * @param {function} success 
   * @param {function} error 
   */
  get = (p: ParamGetReq): any => {
    this._req((p.type="get", p));
  }
  /**
   * @param {string} url
   * @param {string} data
   * @param {function} success 
   * @param {function} error 
   */
  post = (p: ParamPostReq): any => {
    this._req((p.type="post", p));
  }
  /**
   * @param {string} url
   * @param {function} success 
   * @param {function} error 
   */
  json = (p: ParamJsonReq): any => {
    this._req((p.type="get", p.returnJson=true, p));
  }
}