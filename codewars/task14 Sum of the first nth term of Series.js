function SeriesSum(n) {
  let divizor = 1;
  let sum = 0;

  if (n === 1) {
    return "1.00";
  } else if (n === 0) {
    return "0.00";
  }
  for (let i = 0; i < n; i++) {
    sum = sum + 1 / divizor;
    divizor = divizor + 3;
  }

  return sum.toFixed(2).toString();
}

SeriesSum(1);
SeriesSum(2);
SeriesSum(3);
SeriesSum(4);

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
