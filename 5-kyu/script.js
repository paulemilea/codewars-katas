// Moving Zeros To The End
const moveZeros = function (arr) {
  const nonZeroArray = arr.filter(el => el !== 0);
  const zeroOccurrences = arr.length - nonZeroArray.length;

  for (let i = 0; i < zeroOccurrences; i++) {
    nonZeroArray.push(0);
  }

  return nonZeroArray;
};

// The Hashtag Generator
const generateHashtag = function (str) {
  const trimmed = str.trim();
  if (trimmed === '') return false;
  let hashtag;
  if (trimmed.includes(' ')) {
    hashtag =
      '#' +
      trimmed
        .split(' ')
        .filter(word => word !== '')
        .map(word => word.replace(word[0], word[0].toUpperCase()))
        .join('');
  } else {
    hashtag = '#' + trimmed.replace(trimmed[0], trimmed[0].toUpperCase());
  }
  return hashtag.length > 140 ? false : hashtag;
};
