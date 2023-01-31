function duplicateCount(text) {
  let textLowerCase = text.toLowerCase();
  let duplicateLetters = 0;

  for (let i = 0; i < textLowerCase.length; i++) {
    let count = 0;

    for (let j = i; j < textLowerCase.length; j++) {
      if (textLowerCase[i] === textLowerCase[j]) {
        count++;
      }
    }

    if (count > 1) {
      duplicateLetters++;
    }
  }
  return duplicateLetters;
}

console.log(duplicateCount("Indivisibility"));
// console.log(duplicateCount("aabbcde"));
