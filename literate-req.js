"use strict";

class LiterateReq {
  /**
   * @param {string} type 
   * @param {string} url
   * @param {function} success 
   * @param {function} error 
   */
  _req = (p) => {
    let req = new XMLHttpRequest();
    req.open(p.type, p.url, true);
    req.onerror = p.error;
    
    if (p.type == "post") req.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');

    req.onload = function() {
      if (this.status < 400 && this.status >= 200) {
        let resp = p.returnJson ? JSON.parse(this.response) : this.response;
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
  get = (p) => {
    this._req((p.type="get", p));
  }
  /**
   * @param {string} url
   * @param {string} data
   * @param {function} success 
   * @param {function} error 
   */
  post = (p) => {
    this._req((p.type="post", p));
  }
  /**
   * @param {string} url
   * @param {function} success 
   * @param {function} error 
   */
  json = (p) => {
    this._req((p.type="get", p.returnJson=true, p));
  }
}

const litreq = new LiterateReq();