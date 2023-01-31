function sumTwoSmallestNumbers(numbers) {
  let sortArr = numbers.sort((a, b) => a - b);
  let sumTwoSmallestNum = sortArr[0] + sortArr[1];
  return sumTwoSmallestNum;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
