const validparentheses = input => {
  if (input === ")" || input === "(") {
    return "Invalid";
  }
  return "Valid";
};

module.exports = validparentheses;
