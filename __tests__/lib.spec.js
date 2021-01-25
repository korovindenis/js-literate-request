import classUnderTest from '../src/lib';

// mock XMLHttpRequest
const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  readyState: 4,
  responseText: JSON.stringify([{
      title: "test post"
    },
    {
      tile: "second test post"
    }
  ]),
  response: JSON.stringify({
    result: "my page"
  }),
  send: function () {
    this.onload()
  },
  setRequestHeader: () => {
    return true
  }
};
window.XMLHttpRequest = jest.fn(() => mockXHR);

// mock log
console.log = jest.fn();

describe("Check available methods", function () {
  test('Check class', function () {
    const _classUnderTest = new classUnderTest();
    expect(_classUnderTest).toBeTruthy();
  });
  test('Check available method', function () {
    const _classUnderTest = new classUnderTest();
    ["get", "post", "json"].forEach(function (methodName) {
      expect(typeof _classUnderTest[methodName]).toBe("function");
    });
  });
});
describe("Calling methods", function () {
  test('Run Get, Post, Json', function () {
    const _classUnderTest = new classUnderTest();
    ["get", "post", "json"].forEach(function (methodName) {
      const _checkReq = _classUnderTest[methodName]({
        url: 'http://hello.world/',
        error: function () {
          console.log("bad");
        }
      });
      expect(_classUnderTest[methodName]).toBeTruthy();
    });
  });
});
describe("Check success,error func of methods", function () {
  test('Run Get, Post, Json and validation verdict', function () {
    const _classUnderTest = new classUnderTest();
    ["ok", "bad"].forEach(function (methodResult) {
      mockXHR.status = methodResult == "ok" ? 200 : 404;
      ["get", "post", "json"].forEach(function (methodName) {
        const _checkReq = _classUnderTest[methodName]({
          url: 'http://hello.world/',
          success: function (response) {
            console.log("ok");
          },
          error: function () {
            console.log("bad");
          }
        });
        expect(console.log).toHaveBeenCalledWith(methodResult);
      });
    });
  });
});