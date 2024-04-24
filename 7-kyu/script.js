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

// Character Counter
const validateWord = function (word) {
  const uniqueCharactersCount = new Set(word.toLowerCase().split('')).size;
  return word.length % uniqueCharactersCount === 0;
};

// Consecutive items
const consecutive = function (arr, a, b) {
  const indexA = arr.indexOf(a);
  const indexB = arr.indexOf(b);
  return Math.abs(indexA - indexB) === 1;
};

// Currying functions: multiply all elements in an array
const multiplyAll = function (arr) {
  return function multiplyBy(n) {
    return arr.map(value => value * n);
  };
};

// Working with arrays I (and why your code fails in some katas)
const withoutLast = function (arr) {
  return arr.slice(0, -1);
};

// Make them bark!
// Dog.prototype.bark = function () {
//   return 'Woof!';
// };

// Pull your words together, man!
const sentencify = function (words) {
  const sentence = words.join(' ');
  return sentence[0].toUpperCase() + sentence.substring(1) + '.';
};

// Sort the Vowels!
const sortVowels = function (s) {
  if (typeof s !== 'string') return '';
  const charset = 'aeiou';
  return s
    .split('')
    .map(v => {
      if (charset.includes(v) || charset.toUpperCase().includes(v)) {
        return (v = '|' + v);
      } else {
        return (v = v + '|');
      }
    })
    .join('\n');
};

// Only One Gift Per Child
const childrenWithAGift = [];
const handOutGift = function (name) {
  if (childrenWithAGift.includes(name)) {
    throw new Error('This kid already received a gift... ⛔');
  } else {
    childrenWithAGift.push(name);
  }
};
