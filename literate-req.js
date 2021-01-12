"use strict";

const litreq = {
  /**
   * @param {string} type "GET", "POST", "PUT", "DELETE"
   * @param {string} url
   * @param {function} success 
   * @param {function} error 
   */
  get: (p) => {
    let request = new XMLHttpRequest();
    request.open(p.type, p.url, true);
    request.onload = () => {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        let resp = this.response;

        p.success();
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = p.error();

    request.send();
  }
}