function filter_list(l) {
  // Return a new array with the strings filtered out
  const digitsRegex = /\d/g;
  let matchesArray = l.toString().match(digitsRegex);
  return matchesArray;
}
console.log(filter_list([1, 2, "a", "b"]));
