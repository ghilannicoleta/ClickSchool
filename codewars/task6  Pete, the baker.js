function cakes(recipe, available) {
  for (const key in recipe) {
    if (!(key in available)) {
      return 0;
    }

    let nrOfcakes = [];

    for (const key in recipe) {
      nrOfcakes.push(Math.trunc(available[key] / recipe[key]));
    }

    return Math.min(...nrOfcakes);
  }
}
// / must return 2
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
// must return 0
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
