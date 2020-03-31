const validparentheses = require("./validparentheses");

describe("validparentheses", () => {
  describe("Invalid Cases", () => {
    it("should return invalid if input is ')'", () => {
      expect(validparentheses(")")).toEqual("Invalid");
    });

    it("should return invalid if input is '('", () => {
      expect(validparentheses("(")).toEqual("Invalid");
    });

    it("should return invalid if input starts with a ')'", () => {
      expect(validparentheses(")(")).toEqual("Invalid");
      expect(validparentheses(")()()")).toEqual("Invalid");
    });

    it("should return invalid if input ends with a '('", () => {
      expect(validparentheses("()(")).toEqual("Invalid");
    });

    it("should return invalid if input is '())'", () => {
      expect(validparentheses("())")).toEqual("Invalid");
    });

    it("should return invalid if input is ')(()))'", () => {
      expect(validparentheses(")(()))")).toEqual("Invalid");
    });
  });
  describe("Valid Cases", () => {
    it("should return valid if input is '(())'", () => {
      expect(validparentheses("(())")).toEqual("Valid");
    });

    it("should return valid if input is '(())((()())())'", () => {
      expect(validparentheses("(())((()())())")).toEqual("Valid");
    });
  });
});
