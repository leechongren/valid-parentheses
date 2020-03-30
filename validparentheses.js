const validparentheses = input => {
  const splitInput = input.split("");

  if (input === ")" || input === "(") {
    return "Invalid";
  } else if (splitInput[0] === ")") {
    return "Invalid";
  } else if (splitInput[splitInput.length - 1] === "(") {
    return "Invalid";
  }

  return "Valid";
};

module.exports = validparentheses;
