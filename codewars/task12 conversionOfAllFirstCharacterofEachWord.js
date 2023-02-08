let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  const stringToArray = this.split(" ");

  const conversionOfAll = stringToArray.map(
    (word) => word[0].toUpperCase() + word.substring(1)
  );

  return conversionOfAll.join(" ");
};

console.log(str.toJadenCase());
