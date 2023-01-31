// Check same case

function isLetter(str) {
  return str.match(/[a-z]/i);
}

function sameCase(a, b) {
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }

  let isAUpperCase = a == a.toUpperCase();
  let isBUpperCase = b == b.toUpperCase();

  if (isAUpperCase === isBUpperCase) {
    return 1;
  } else {
    return 0;
  }
}

console.log(sameCase(":", "B"));
