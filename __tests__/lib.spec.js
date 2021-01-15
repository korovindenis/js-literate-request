import LiterateReq  from '../src/lib';

describe("Given an instance of my Dog library", () => {
  describe("when I need the name", () => {
    it("should return the name", () => {
      const LitReq = new LiterateReq();
      expect(2+2).toEqual(4);
    });
  });
});


/*
describe("Private function", () => {
  test('Check _req', () => {
    expect(typeof testClass.get()).toBe("object");
  });
});
/*
describe("Public function", () => {
  test('Check _req', () => {
    expect(true).toBe(true);
  });
});
*/