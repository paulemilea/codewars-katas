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

// Regex Password Validation
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Not very secure
const alphanumeric = function (string) {
  const regex = new RegExp(/^(?!.*[ _])[A-Za-z0-9]+$/);
  return regex.test(string);
};

// Simple Pig Latin
const pigIt = function (str) {
  return str
    .split(' ')
    .map(word =>
      !word.match(/[.,!?;:'"(){}\[\]<>\-]/g)
        ? `${word.slice(1)}${word[0]}${'ay'}`
        : word
    )
    .join(' ');
};

// First non-repeating character
const firstNonRepeatingLetter = function (s) {
  const lowerCaseString = s.toLowerCase();

  const occurences = lowerCaseString.split('').reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  for (let i = 0; i < s.length; i++) {
    if (occurences[lowerCaseString[i]] === 1) {
      return s[i];
    }
  }

  return '';
};
