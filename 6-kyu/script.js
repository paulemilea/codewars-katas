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
const solution = (...args) => args.length !== new Set(args).size;

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
