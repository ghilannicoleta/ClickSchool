function getSum(a, b) {
  let sum = 0;
  let start = Math.min(a, b);
  let end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(-1, 5));
