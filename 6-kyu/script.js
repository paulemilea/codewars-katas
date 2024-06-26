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
