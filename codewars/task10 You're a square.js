var isSquare = function (n) {
  if (n < 0) {
    return false;
  }

  let sqrtN = Math.sqrt(n);

  if (sqrtN % 1 === 0) {
    return true;
  }

  return false;
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
