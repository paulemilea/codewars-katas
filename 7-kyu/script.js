// Vowel Count
const getCount = function (str) {
  return str.split('').reduce((acc, el) => {
    if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
      acc++;
    }
    return acc;
  }, 0);
};

// List Filtering
const filter_list = function (arr) {
  return arr.filter(el => typeof el !== 'string');
};

// Possibilities Array
const isAllPossibilities = function (arr) {
  const isValid = [];
  for (let i = 0; i < arr.length; i++) {
    isValid.push(arr.includes(i) ? true : false);
  }
  return !isValid.includes(false);
};

// Guess the Word: Count Matching Letters
const countCorrectCharacters = function (correctWord, guess) {
  if (correctWord.length !== guess.length)
    throw new Error('Function parameters must have the same length ⛔');
  let count = 0;
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] === guess[i]) count++;
  }
  return count;
};

// Array - squareUp b!
const squareUp = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
      console.log({ i, j });
      if (i < j) arr.push(0);
      else arr.push(j);
    }
  }
  return arr;
};

// Shortest Word
const findShort = function (s) {
  return Math.min(...s.split(' ').map(word => +word.length));
};

// Running out of space
const spacey = function (arr) {
  const result = [];
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    result.push(str);
  }
  return result;
};

// Is it a letter?
const isItLetter = function (character) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return chars.includes(character) || chars.toUpperCase().includes(character);
};
