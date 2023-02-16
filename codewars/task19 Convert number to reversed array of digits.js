function digitize(n) {
  let reversNumber = n
    .toString()
    .split("")
    .reverse()
    .map((el) => parseInt(el));

  return reversNumber;
}

console.log(digitize(35231));
// [1,3,2,5,3]

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
