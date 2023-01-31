// Multiplii prin permutări II

function check2StrHaveSameDigits(str1, str2) {
  str1 = str1
    .toString()
    .split("")
    .sort((a, b) => a - b);
  str2 = str2
    .toString()
    .split("")
    .sort((a, b) => a - b);

  return str1.toString() === str2.toString();
}

function findLowestInt(k) {
  let k2 = k + 1;
  let lowestInt = 0;
  let foundLowestInt = false;

  while (!foundLowestInt) {
    lowestInt++;
    let nk1 = lowestInt * k;
    let nk2 = lowestInt * k2;

    foundLowestInt = check2StrHaveSameDigits(nk1, nk2);
  }

  return lowestInt;
}

console.log(findLowestInt(100) === 8919);
