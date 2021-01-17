import {req} from '../src/index';

describe("Private function", () => {
  test('Check _req', () => {
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