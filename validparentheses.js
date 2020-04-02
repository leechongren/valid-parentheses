class Stack {
  constructor(arr) {
    this._arr = arr;
  }

  push(item) {
    this._arr[this._arr.length] = item;
    return this._arr;
  }

  pop() {
    return this._arr.pop();
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const validparentheses = input => {
  const splitInput = input.split("");
  const parenthesesStack = new Stack([]);
  let validity = true;

  splitInput.map(bracket => {
    if (bracket === "(") {
      parenthesesStack.push(bracket);
    } else if (bracket === ")") {
      if (parenthesesStack._arr.length === 0) {
        validity = false;
      }
      parenthesesStack.pop();
    }
  });

  if (parenthesesStack._arr.length === 0 && validity) {
    return true;
  } else {
    return false;
  }
};

module.exports = validparentheses;
