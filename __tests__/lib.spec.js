import classUnderTest from '../src/lib';

describe("Private function", function() {
  test('Check class', function() {
    const _classUnderTest = new classUnderTest();
    expect(_classUnderTest).toBeTruthy();
  });
  test('Check method', function() {
    const _classUnderTest = new classUnderTest();
    expect(typeof _classUnderTest).toBe("object");
  });
});

/*
describe("Private function", () => {
  test('Check _req', () => {
    console.log(req);
    let testClass = new req();
    let checkGet = testClass.get({type:"get",url:"http://localhost/"});
    expect(checkGet).toBe("object");
  });
});
/*
describe("Public function", () => {
  test('Check _req', () => {
    expect(true).toBe(true);
  });
});
*/