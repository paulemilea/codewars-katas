// Stop gninnipS My sdroW!
const spinWords = function (string) {
  return string
    .split(' ')
    .map(el => (el.length >= 5 ? el.split('').reverse().join('') : el))
    .join(' ');
};

// Unique In Order
const uniqueInOrder = function (iterable) {
  return Array.from(iterable).filter((el, i, arr) => el !== arr[i - 1]);
};

// Detect Pangram
const isPangram = function (string) {
  return new Set(string.toLowerCase().replace(/[^A-Za-z]/g, '')).size === 26;
};

// Duplicate Arguments
const duplicateArgs = (...args) => args.length !== new Set(args).size;

// Array Helpers
Array.prototype.square = function () {
  return this.map(value => value ** 2);
};

Array.prototype.cube = function () {
  return this.map(value => value ** 3);
};

Array.prototype.average = function () {
  return this.length
    ? this.reduce((acc, value) => acc + value) / this.length
    : NaN;
};

Array.prototype.sum = function () {
  return this.length ? this.reduce((acc, value) => acc + value) : [];
};

Array.prototype.even = function () {
  return this.filter(value => value % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter(value => value % 2 !== 0);
};

// Find the unique number
const findUniq = function (arr) {
  const count = {};

  arr.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  const [uniq] = arr.filter(item => count[item] === 1);

  return uniq;
};

// Kebabize
const kebabize = function (str) {
  return str
    .split(/(?=[A-Z])/)
    .map(v => v.replace(v.match(/[0-9]/g), ''))
    .map(v => v.toLowerCase())
    .join('-');
};

// Only Duplicates
const onlyDuplicates = function (str) {
  const occurences = str.split('').reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  let result = '';
  for (const letter of str) {
    if (occurences[letter] > 1) {
      result += letter;
    }
  }

  return result;
};

// Sort the odd
const sortArray = function (arr) {
  const odds = arr.filter(v => v % 2 !== 0);
  odds.sort((a, b) => a - b);

  let oddsIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = odds[oddsIndex];
      oddsIndex++;
    }
  }

  return arr;
};

// Replace With Alphabet Position
const alphabetPosition = function (text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lettersOnly = text
    .split('')
    .filter(letter => alphabet.includes(letter.toLowerCase()));
  return lettersOnly
    .map(letter => alphabet.indexOf(letter.toLowerCase()) + 1)
    .join(' ');
};

// Who likes it?
const likes = function (names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

// Multiples of 3 or 5
const multiplesOf3or5 = function (number) {
  if (number <= 0) return 0;
  const result = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) result.push(i);
    if (i % 3 === 0 && i % 5 === 0 && !result.includes(i)) result.push(i);
  }

  return result.reduce((acc, el) => acc + el, 0);
};

// Create Phone Number
const createPhoneNumber = function (numbers) {
  let phoneNumber = '(';

  for (let i = 0; i < numbers.length; i++) {
    if (i === 2) {
      phoneNumber += numbers[i] + ') ';
    } else if (i === 5) {
      phoneNumber += numbers[i] + '-';
    } else {
      phoneNumber += numbers[i];
    }
  }

  return phoneNumber;
};

// Find the odd int
const findOdd = function (arr) {
  const occurences = arr.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  return +Object.entries(occurences).find(
    ([_key, value]) => value % 2 !== 0
  )[0];
};

// Find the missing letter
const findMissingLetter = function (array) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const start = charset.indexOf(array[0]);
  const end = charset.indexOf(array[array.length - 1]);

  for (let i = start; i <= end; i++) {
    if (!array.includes(charset[i])) return charset[i];
  }
};

// Sum of Digits / Digital Root
const digitalRoot = function (n) {
  const sumOfDigits = function (n) {
    return String(n)
      .split('')
      .map(Number)
      .reduce((acc, v) => acc + v);
  };

  let result = n;

  while (result >= 10) {
    result = sumOfDigits(result);
  }

  return result;
};

// Convert string to camel case
const toCamelCase = function (str) {
  return str
    .split(/[-_]/)
    .map((word, i) => (i !== 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');
};

// WeIrD StRiNg CaSe
const toWeirdCase = function (string) {
  return string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((letter, index) => {
          return index % 2 !== 0 ? letter.toLowerCase() : letter.toUpperCase();
        })
        .join('')
    )
    .join(' ');
};

// Your order, please
const order = function (words) {
  return words
    .split(' ')
    .sort((a, b) => {
      return a.match(/[0-9]/) - b.match(/[0-9]/);
    })
    .join(' ');
};

// Highest Scoring Word
const high = function (x) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const words = x.split(' ');

  const wordsScore = words.map(word =>
    word
      .split('')
      .map(letter => +alphabet.indexOf(letter) + 1)
      .reduce((totalScore, letterScore) => totalScore + letterScore)
  );

  const highestScore = Math.max(...wordsScore);

  const indexOfhighestScore = wordsScore.indexOf(highestScore);

  return words[indexOfhighestScore];
};

// Count characters in your string
const count = function (string) {
  const occurences = string.split('').reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  return occurences;
};

// Break camelCase
const solution = string => string.split(/(?=[A-Z])/).join(' ');

// Mexican Wave
const wave = function (str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;

    result.push(
      str
        .split('')
        .map((letter, index) =>
          index === i ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join('')
    );
  }

  return result;
};

// Array.diff
const arrayDiff = function (a, b) {
  return a.filter(v => !b.includes(v));
};
