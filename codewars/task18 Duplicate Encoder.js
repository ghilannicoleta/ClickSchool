function duplicateEncode(word) {
  let resultStr = "";

  for (let i = 0; i < word.length; i++) {
    let charCount = word
      .toLowerCase()
      .split("")
      .filter((char) => char == word[i]).length;
    // console.log(`i : ${i}`);
    // console.log(`filtrez dupa ${word[i]} : ${charCount}`);

    if (charCount == 1) {
      resultStr = resultStr + "(";
    } else {
      resultStr = resultStr + ")";
    }
  }

  return resultStr;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
