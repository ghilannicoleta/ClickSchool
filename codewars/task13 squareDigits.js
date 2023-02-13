function squareDigits(num) {
  let res = "";
  num
    .toString()
    .split("")
    .forEach((el) => {
      res = res + (el * el).toString();
    });
  return +res;
}

console.log(squareDigits(3212));

//  O intrare de 765 va/ar trebui să returneze 493625 deoarece 7 2 este 49, 6 2 este 36 și 5 2 este 25. (49-36-35)
git;
