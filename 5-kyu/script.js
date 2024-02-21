// Moving Zeros To The End
const moveZeros = function (arr) {
  const nonZeroArray = arr.filter(el => el !== 0);
  const zeroOccurrences = arr.length - nonZeroArray.length;

  for (let i = 0; i < zeroOccurrences; i++) {
    nonZeroArray.push(0);
  }

  return nonZeroArray;
};
