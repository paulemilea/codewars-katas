// Even or Odd
const evenOrOdd = function (number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
};

// Multiply
// const multiply = function (a, b) {
//   return a * b;
// };

// Reversed Strings
const solution = function (str) {
  return str.split('').reverse().join('');
};

// Convert boolean values to strings 'Yes' or 'No'.
const boolToWord = bool => (bool === true ? 'Yes' : 'No');

// Convert a Number to a String!
const numberToString = num => String(num);

// Quarter of the year
const quarterOf = month => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
    case 4:
    case 5:
    case 6:
      return 2;
    case 7:
    case 8:
    case 9:
      return 3;
    case 10:
    case 11:
    case 12:
      return 4;
  }
};

// Convert a String to a Number!
const stringToNumber = str => +str;

// Array plus array
const arrayPlusArray = function (arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, el) => acc + el, 0);
};

// Grasshopper - Combine strings
const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

// Sum without highest and lowest number
const sumArray = function (arr) {
  if (!Array.isArray(arr) || arr.length <= 2) return 0;

  const sortedArray = [...arr.sort((a, b) => a - b)];

  return sortedArray.slice(1, -1).reduce((acc, curr) => acc + curr, 0);
};

// Flick Switch
const flickSwitch = function (arr) {
  let value = true;
  return arr.map(el => (el === 'flick' ? (value = !value) : value));
};

// Multiply the number
// const multiply = function (number) {
//   // const numberOfDigits = String(number).replace('-', '').length;
//   const numberOfDigits = String(Math.abs(number)).length;
//   return number * 5 ** numberOfDigits;
// };

// All Star Code Challenge #18
const strCount = function (str, targetLetter) {
  const regexPattern = new RegExp(targetLetter, 'g');
  return str.match(regexPattern) ? str.match(regexPattern).length : 0;
};

// Invert values
const invert = function (arr) {
  return [...arr.map(el => (el > 0 ? el * -1 : Math.abs(el) * 1))];
};

// Sum Arrays
const sum = function (numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// Is this my tail?
const correctTail = function (body, tail) {
  const sub = body[body.length - 1];

  if (sub === tail) return true;
  return false;
};

// Fundamentals: Return
const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const mod = (a, b) => a % b;

const exponent = (a, b) => a ** b;

const subt = (a, b) => a - b;

// Beginner - Lost Without a Map
const maps = x => x.map(value => value * 2);

// Vowel remover
const shortcut = function (string) {
  return string
    .split('')
    .filter(
      letter =>
        letter !== 'a' &&
        letter !== 'e' &&
        letter !== 'i' &&
        letter !== 'o' &&
        letter !== 'u'
    )
    .join('');
};

// Count the Monkeys!
const monkeyCount = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};

// String repeat
const repeatStr = function (n, s) {
  return s.repeat(n);
};

// Grasshopper - If/else syntax debug
const checkAlive = function (health) {
  return health > 0 ? true : false;
};

// Total amount of points
const points = function (games) {
  return games
    .map(game => {
      const hometeamScore = game[0];
      const visitorteamScore = game[2];
      if (hometeamScore > visitorteamScore) return 3;
      if (visitorteamScore > hometeamScore) return 0;
      if (hometeamScore === visitorteamScore) return 1;
    })
    .reduce((acc, score) => acc + score);
};

// Beginner - Reduce but Grow
const grow = x => x.reduce((acc, value) => acc * value);

// Counting sheep...
const countSheeps = function (sheep) {
  return sheep.reduce((acc, el) => (el === true ? (acc += 1) : acc), 0);
};

// Is the string uppercase?
String.prototype.isUpperCase = function () {
  return this.valueOf() === this.toUpperCase();
};

// Find Multiples of a Number
const findMultiples = function (integer, limit) {
  const list = [];
  for (let i = integer; i <= limit; i += integer) list.push(i);
  return list;
};

// The Feast of Many Beasts
const feast = function (beast, dish) {
  return beast[0] + beast.slice(-1) === dish[0] + dish.slice(-1);
};

// Well of Ideas - Easy Version
const well = function (x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') count++;
  }

  if (count > 2) return 'I smell a series!';
  else if (count === 0) return 'Fail!';
  else return 'Publish!';
};

// Grasshopper - Summation
const summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

// Find numbers which are divisible by given number
const divisibleBy = function (numbers, divisor) {
  return numbers.filter(number => number % divisor === 0);
};

// Remove exclamation marks
const removeExclamationMarks = function (s) {
  return s
    .split('')
    .filter(letter => letter !== '!')
    .join('');
};

// Count by X
const countBy = function (x, n) {
  const result = [];
  let num = 0;

  for (let i = 0; i < n; i++) {
    num += x;
    result.push(num);
  }

  return result;
};

// Return Negative
const makeNegative = function (num) {
  return num < 0 ? num : -num;
};
