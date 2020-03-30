const validparentheses = require("./validparentheses");

describe("validparentheses", () => {
  it("should successfully call function and return", () => {
    expect(validparentheses()).toEqual(expect.anything());
  });

  it("should return invalid if input is ')'", () => {
    expect(validparentheses(")")).toEqual("Invalid");
  });

  it("should return invalid if input is '('", () => {
    expect(validparentheses("(")).toEqual("Invalid");
  });
});
