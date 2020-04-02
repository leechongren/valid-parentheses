const validparentheses = require("./validparentheses");

describe("validparentheses", () => {
  describe("Invalid Cases", () => {
    it("should return invalid if input is ')'", () => {
      expect(validparentheses(")")).toBeFalsy();
    });

    it("should return invalid if input is '('", () => {
      expect(validparentheses("(")).toBeFalsy();
    });

    it("should return invalid if input starts with a ')'", () => {
      expect(validparentheses(")(")).toBeFalsy();
      expect(validparentheses(")()()")).toBeFalsy();
    });

    it("should return invalid if input ends with a '('", () => {
      expect(validparentheses("()(")).toBeFalsy();
    });

    it("should return invalid if input is '())'", () => {
      expect(validparentheses("())")).toBeFalsy();
    });

    it("should return invalid if input is ')(()))'", () => {
      expect(validparentheses(")(()))")).toBeFalsy();
    });
  });
  describe("Valid Cases", () => {
    it("should return valid if input is '(())'", () => {
      expect(validparentheses("(())")).toBeTruthy();
    });

    it("should return valid if input is '(())((()())())'", () => {
      expect(validparentheses("(())((()())())")).toBeTruthy();
    });
  });
});
