function longest(s1, s2) {
  str1 = s1.split("");
  str2 = s2.split("");

  let arrConcat = str1.concat(str2);

  let sortArrr = arrConcat.sort();

  const set = new Set(sortArrr);

  const newArr = [...set];

  const distinctLettersStr = newArr.join("");

  return distinctLettersStr;
}

console.log(longest("aretheyhere", "yestheyarehere"));
