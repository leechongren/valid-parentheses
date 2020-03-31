const validparentheses = input => {
  const splitInput = input.split("");
  let countOfBracketsSet = 0;
  if (splitInput[0] === ")") {
    return "Invalid";
  } else if (splitInput[splitInput.length - 1] === "(") {
    return "Invalid";
  }

  splitInput.map(bracket => {
    if (bracket === "(") {
      countOfBracketsSet++;
    } else if (bracket === ")") {
      countOfBracketsSet--;
    }
  });

  if (countOfBracketsSet !== 0) {
    return "Invalid";
  } else {
    return "Valid";
  }
};

module.exports = validparentheses;
