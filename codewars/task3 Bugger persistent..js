function multiplyNumberDigits(num) {
  let arrNumbers = num.toString().split("");

  let arrElementsMultiplyResult = arrNumbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

  return arrElementsMultiplyResult;
}

function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }

  let multiplyCount = 0;
  let resultMultiply = 0;

  while (1) {
    multiplyCount++;
    if (multiplyCount == 1) {
      resultMultiply = multiplyNumberDigits(num);
    } else {
      resultMultiply = multiplyNumberDigits(resultMultiply);
    }

    if (resultMultiply.toString().length === 1) {
      return multiplyCount;
    }
  }
}

console.log(persistence(4));
console.log(persistence(39));
console.log(persistence(999));
