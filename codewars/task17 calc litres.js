function litres(time) {
  let fixedTime = Math.trunc(time);
  let litres = fixedTime * 0.5;
  return Math.trunc(litres);
}

console.log(litres(2));
console.log(litres(1.4));
console.log(litres(12.3));

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
