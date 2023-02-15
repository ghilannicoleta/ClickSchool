function betterThanAverage(classPoints, yourPoints) {
  let classPointsCopy = [...classPoints];
  classPointsCopy.push(yourPoints);

  let sumPoints = classPointsCopy.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const media = sumPoints / classPointsCopy.length;

  if (media <= yourPoints) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

// Primești o serie cu scorurile la testele colegilor tăi. Acum calculați media și comparați-vă scorul!
// Întoarce-te Truedacă ești mai bine, altfel False!
// Notă:
// Punctele tale nu sunt incluse în gama de puncte ale clasei tale. Pentru a calcula punctul mediu, puteți adăuga punctul dvs. la matricea dată!
