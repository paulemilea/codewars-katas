// Even or Odd
const evenOrOdd = function (number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
};

// Multiply
// const multiply = function (a, b) {
//   return a * b;
// };

// Reversed Strings
const reverseString = function (str) {
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

// Sum of positive
const positiveSum = function (arr) {
  return arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
};

// Count of positives / sum of negatives
const countPositivesSumNegatives = function (input) {
  if (input === null || !input.length) return [];

  const count = input.filter(num => num > 0).length;
  const sum = input.filter(num => num < 0).reduce((acc, curr) => acc + curr, 0);

  return [count, sum];
};

// Get the mean of an array
const getAverage = function (marks) {
  return Math.floor(marks.reduce((acc, el) => acc + el, 0) / marks.length);
};

// Sum Mixed Array
const sumMix = function (x) {
  return x.map(el => +el).reduce((acc, el) => acc + el);
};

// Sentence Smash
const smash = function (words) {
  return words.join(' ');
};

// Template Strings
const templateStrings = (noun, adjective) => `${noun} are ${adjective}`;

// isReallyNaN
const isReallyNaN = val => Number.isNaN(val);

// Basic Mathematical Operations
const basicOp = function (operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
};

// Find the Remainder
const remainder = function (n, m) {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  return max % min;
};

// Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
  if (p2 === 'scissors' && p1 === 'paper') return 'Player 2 won!';
  if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
  if (p2 === 'paper' && p1 === 'rock') return 'Player 2 won!';
  if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
  if (p2 === 'rock' && p1 === 'scissors') return 'Player 2 won!';
};

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
const replace = function (s) {
  return s
    .split('')
    .map(el => el.replace(/[aeiouAEIOU]/, '!'))
    .join('');
};

// Returning Strings
const greet = function (name) {
  return `Hello, ${name} how are you doing today?`;
};

// Merging sorted integer arrays (without duplicates)
const mergeArrays = function (a, b) {
  return Array.from(new Set([...a, ...b])).sort((a, b) => a - b);
};

// Convert number to reversed array of digits
const digitize = function (n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(v => +v);
};

// Mr. Freeze
// Object.freeze(MrFreeze);

// Welcome to the City
const sayHello = function (name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
};

// Double Char
const doubleChar = function (str) {
  return str
    .split('')
    .map(v => v.repeat(2))
    .join('');
};

// Count Odd Numbers below n
const oddCount = function (n) {
  return Math.floor(n / 2);
};

// Removing Elements
const removeEveryOther = function (arr) {
  return arr.filter((_v, i) => i % 2 === 0);
};

// Hello, Name or World!
const hello = function (name) {
  if (name)
    return `Hello, ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`;
  return 'Hello, World!';
};

// Leonardo Dicaprio and Oscars
const leo = function (oscar) {
  if (oscar === 88) return 'Leo finally won the oscar! Leo is happy';
  if (oscar === 86) return 'Not even for Wolf of wallstreet?!';
  if (oscar !== 88 && oscar !== 86 && oscar < 88)
    return 'When will you give Leo an Oscar?';
  if (oscar > 88) return 'Leo got one already!';
};

// Generate range of integers
const generateRange = function (min, max, step) {
  if (min < max && step > 0) {
    const result = [];
    for (let i = min; i <= max; i += step) {
      result.push(i);
    }
    return result;
  }
};

// Merge two sorted arrays into one
const mergeArrays2 = function (arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
};

// What is between?
const between = function (a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
};

// How old will I be in 2099?
const calculateAge = function (y1, y2) {
  const age = Math.abs(y1 - y2);

  if (age === 0) return 'You were born this very year!';

  if (y1 < y2) return `You are ${age} ${age === 1 ? 'year' : 'years'} old.`;

  return `You will be born in ${age} ${age === 1 ? 'year' : 'years'}.`;
};

// Formatting decimal places #0
const twoDecimalPlaces = function (n) {
  return Math.round(n * 100) / 100;
};

// Remove the time
const shortenToDate = function (longDate) {
  return longDate.split(',')[0];
};

// Get number from string
const getNumberFromString = function (s) {
  return +s
    .split('')
    .filter(v => v.match(/[0-9]/g))
    .join('');
};

// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

// My head is at the wrong end!
const fixTheMeerkat = function (arr) {
  return arr.reverse();
};

// CSV representation of array
const toCsvText = function (array) {
  return array.map(innerArray => innerArray.join(',')).join('\n');
};

// Contamination #1 -String-
const contamination = function (text, char) {
  return text
    .split('')
    .map(v => v.replace(v, char))
    .join('');
};

// Get Planet Name By ID
const getPlanetName = function (id) {
  let name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  return name;
};

// Enumerable Magic #1 - True for All?
const all = function (arr, fn) {
  return arr.every(v => fn(v));
};

// Find the Difference in Age between Oldest and Youngest Family Members
const differenceInAges = function (ages) {
  const youngest = Math.min(...ages);
  const oldest = Math.max(...ages);
  const ageDifference = Math.abs(oldest - youngest);
  return [youngest, oldest, ageDifference];
};

// Draw stairs
const drawStairs = function (n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      str += `${' '.repeat(i - 1)}I`;
    } else {
      str += `${' '.repeat(i - 1)}I\n`;
    }
  }
  return str;
};

// Square(n) Sum
const squareSum = function (numbers) {
  if (!numbers.length) return 0;
  return numbers.map(v => v * v).reduce((acc, v) => acc + v);
};

// Sum The Strings
const sumStr = function (a, b) {
  return String(Number(a) + Number(b));
};

// String cleaning
const stringClean = function (s) {
  return s
    .split('')
    .filter(letter => !letter.match(/[0-9]/))
    .join('');
};

// Add Length
const addLength = function (str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
};

// Check same case
const sameCase = function (a, b) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (!charset.includes(a) || !charset.includes(b)) return -1;
  if (
    (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
  )
    return 1;
  return 0;
};

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(letter =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join('');
};

// Return Two Highest Values in List
const twoHighest = function (arr) {
  return Array.from(new Set(arr))
    .sort((a, b) => b - a)
    .slice(0, 2);
};

// Dollars and Cents
const formatMoney = function (amount) {
  return `$${amount.toFixed(2)}`;
};

// Stringy Strings
const stringy = function (size) {
  let str = '';
  for (let i = 1; i <= size; i++) {
    str += i % 2;
  }
  return str;
};

// Abbreviate a Two Word Name
const abbrevName = function (name) {
  return name
    .split(' ')
    .map(name => name.at(0).toUpperCase())
    .join('.');
};

// Calculate average
const findAverage = function (array) {
  return array.length ? array.reduce((acc, el) => acc + el) / array.length : 0;
};

// If you can't sleep, just count sheep!!
const countSheep = function (num) {
  return Array.from({ length: num }, (_v, i) => `${i + 1} sheep...`).join('');
};

// How good are you really?
const betterThanAverage = function (classPoints, yourPoints) {
  const totalClassPoints = [...classPoints, yourPoints];
  const avgScore =
    totalClassPoints.reduce((acc, classPoint) => acc + classPoint) /
    totalClassPoints.length;
  return yourPoints > avgScore;
};

// Simple validation of a username with regex
const validateUsr = function (username) {
  const regex = new RegExp(/^[a-z0-9_]+$/);
  return regex.test(username) && username.length >= 4 && username.length <= 16;
};

// Sum of Multiples
const sumMul = function (n, m) {
  if (n <= 0 || m <= 0) return 'INVALID';
  let result = 0;
  for (let i = n; i < m; i += n) {
    result += i;
  }
  return result;
};

// String Templates - Bug Fixing #5
const buildString = function (...template) {
  return `I like ${template.join(', ')}!`;
};

// Enumerable Magic - Does My List Include This?
const include = function (arr, item) {
  return arr.includes(item);
};

// Transportation on vacation
const rentalCarCost = function (d) {
  const totalPriceWithoutDiscount = d * 40;

  if (d >= 7) return totalPriceWithoutDiscount - 50;
  if (d >= 3) return totalPriceWithoutDiscount - 20;
  return totalPriceWithoutDiscount;
};

// Exclamation marks series #1: Remove an exclamation mark from the end of string
const remove = function (string) {
  if (string[string.length - 1] === '!')
    return string.substring(0, string.length - 1);
  return string;
};

// Is n divisible by x and y?
const isDivisible = function (n, x, y) {
  return n % x === 0 && n % y === 0;
};

// Sort and Star
const twoSort = function (s) {
  return s
    .sort()
    .find((_, i) => i === 0)
    .split('')
    .join('***');
};

// Remove First and Last Character
const removeChar = function (str) {
  return str.substring(1, str.length - 1);
};

// Ensure question
const ensureQuestion = function (s) {
  return s[s.length - 1] === '?' ? s : s + '?';
};

// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;

// Is it even?
const testEven = function (n) {
  return n % 2 === 0;
};

// Twice as old
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

// Is he gonna survive?
const hero = function (bullets, dragons) {
  return bullets >= dragons * 2;
};

// Opposite number
const opposite = function (number) {
  return number > 0 ? -Math.abs(number) : Math.abs(number);
};

// Keep up the hoop
const hoopCount = function (n) {
  return n >= 10
    ? 'Great, now move on to tricks'
    : 'Keep at it until you get it';
};

// Short Long Short
const shortLongShort = function (a, b) {
  const sorted = [a, b].sort((a, b) => a.length - b.length);
  return `${sorted.at(0)}${sorted.at(1)}${sorted.at(0)}`;
};

// MakeUpperCase
const makeUpperCase = str => str.toUpperCase();

// Remove String Spaces
const noSpace = x => x.split(' ').join('');

// Parse nice int from char problem
const getAge = inputString => parseInt(inputString);

// Regex count lowercase letters
const lowercaseCount = function (str) {
  const count = str.match(/[a-z]/g);
  return count !== null ? count.length : 0;
};

// Grasshopper - Array Mean
const findMean = function (nums) {
  return nums.reduce((acc, v) => acc + v) / nums.length;
};

// Remove duplicates from list
const distinct = function (a) {
  return Array.from(new Set(a));
};

// Remove First and Last Character Part Two
const array = function (string) {
  const strToArr = string.split(',');
  if (strToArr.length <= 2) return null;
  return strToArr
    .filter((_, i, arr) => i !== 0 && i !== arr.length - 1)
    .join(' ');
};

// FIXME: Replace all dots
const replaceDots = function (str) {
  return str.replaceAll('.', '-');
};

// Exclusive "or" (xor) Logical Operator
const xor = function (a, b) {
  return (a === true && b === false) || (a === false && b === true);
};

// Chuck Norris VII - True or False? (Beginner)
const ifChuckSaysSo = () => !true;

// Grasshopper - Terminal game combat function
const combat = function (health, damage) {
  return health < damage ? 0 : health - damage;
};

// Simple Comparison?
const compare = function (a, b) {
  return String(a) === String(b);
};

// Reverse List Order
const reverseList = function (list) {
  return list.reverse();
};

// Opposites Attract
const lovefunc = function (flower1, flower2) {
  return (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  );
};

// Thinkful - Logic Drills: Traffic light
const updateLight = function (current) {
  if (current === 'green') return 'yellow';
  if (current === 'yellow') return 'red';
  if (current === 'red') return 'green';
};

// A Needle in the Haystack
const findNeedle = function (haystack) {
  return `found the needle at position ${haystack.findIndex(
    v => v === 'needle'
  )}`;
};

// Is the date today
const isToday = function (date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// Who is going to pay for the wall?
const whoIsPaying = function (name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
};

// Reversing Words in a String
const reverse = function (string) {
  return string.split(' ').reverse().join(' ');
};

// Super Duper Easy
const problem = x => (typeof x !== 'number' ? 'Error' : x * 50 + 6);

// Fake Binary
const fakeBin = function (x) {
  return x
    .split('')
    .map(v => (v < 5 ? 0 : 1))
    .join('');
};

// You Can't Code Under Pressure #1
const doubleInteger = i => i * 2;

// Capitalization and Mutability
const capitalizeWord = function (word) {
  return word[0].toUpperCase() + word.slice(1);
};

// Return the day
const whatday = function (num) {
  let result = '';
  switch (num) {
    case 1:
      result = 'Sunday';
      break;
    case 2:
      result = 'Monday';
      break;
    case 3:
      result = 'Tuesday';
      break;
    case 4:
      result = 'Wednesday';
      break;
    case 5:
      result = 'Thursday';
      break;
    case 6:
      result = 'Friday';
      break;
    case 7:
      result = 'Saturday';
      break;
    default:
      result = 'Wrong, please enter a number between 1 and 7';
      break;
  }
  return result;
};

// Who ate the cookie?
const cookie = function (x) {
  return typeof x === 'string'
    ? 'Who ate the last cookie? It was Zach!'
    : typeof x === 'number'
    ? 'Who ate the last cookie? It was Monica!'
    : 'Who ate the last cookie? It was the dog!';
};

// Printing Array elements with Comma delimiters
const printArray = function (array) {
  return array.join(',');
};

// Be Concise IV - Index of an element in an array
const find = (array, element) =>
  array.includes(element) ? array.indexOf(element) : 'Not found';

// Reversed sequence
const reverseSeq = n => {
  return Array.from({ length: n }, (_v, i) => i + 1).sort((a, b) => b - a);
};

// Type of sum
const typeOfSum = function (a, b) {
  return typeof (a + b);
};

// Beginner Series #1 School Paperwork
const paperwork = (n, m) => (n > 0 && m > 0 ? n * m : 0);

// Is it a number?
const isDigit = s => /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/.test(s);

// Find the position!
const position = function (letter) {
  const charset = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${charset.indexOf(letter) + 1}`;
};

// 5 without numbers !!
const unusualFive = function () {
  return 'apple'.length;
};

// Cat years, Dog years
const humanYearsCatYearsDogYears = function (humanYears) {
  const humanAge = humanYears * 1;
  let catAge = 0;
  let dogAge = 0;

  for (let i = 0; i < humanYears; i++) {
    if (i > 1) {
      catAge += 4;
      dogAge += 5;
    } else if (i === 1) {
      catAge += 9;
      dogAge += 9;
    } else {
      catAge += 15;
      dogAge += 15;
    }
  }

  return [humanAge, catAge, dogAge];
};

// Convert a Boolean to a String
const booleanToString = function (b) {
  return b ? 'true' : 'false';
};

// Implement Array.prototype.filter()
Array.prototype.filter = function (func) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

// Grader
const grader = function (score) {
  if (score > 1 || score < 0.6) return 'F';
  if (score >= 0.9) return 'A';
  if (score >= 0.8) return 'B';
  if (score >= 0.7) return 'C';
  if (score >= 0.6) return 'D';
};

// Tip Calculator
const calculateTip = function (amount, rating) {
  const lowercaseRating = rating.toLowerCase();

  let tip;
  switch (lowercaseRating) {
    case 'excellent':
      tip = amount * 0.2;
      break;
    case 'great':
      tip = amount * 0.15;
      break;
    case 'good':
      tip = amount * 0.1;
      break;
    case 'poor':
      tip = amount * 0.05;
      break;
    case 'terrible':
      tip = amount * 0;
      break;
    default:
      return 'Rating not recognised';
  }

  return Math.ceil(tip);
};

// Grasshopper - Grade book
const getGrade = function (s1, s2, s3) {
  const avgScore = (s1 + s2 + s3) / 3;

  if (avgScore <= 100 && avgScore >= 90) {
    return 'A';
  }

  if (avgScore <= 90 && avgScore >= 80) {
    return 'B';
  }

  if (avgScore <= 80 && avgScore >= 70) {
    return 'C';
  }

  if (avgScore <= 70 && avgScore >= 60) {
    return 'D';
  }

  if (avgScore <= 60 && avgScore >= 0) {
    return 'F';
  }
};

// Are You Playing Banjo?
const areYouPlayingBanjo = function (name) {
  return name[0] === 'R' || name[0] === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
};

// Drink about
const peopleWithAgeDrink = function (old) {
  if (old < 14) {
    return 'drink toddy';
  } else if (old < 18) {
    return 'drink coke';
  } else if (old < 21) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
};

// Convert a string to an array
const stringToArray = function (string) {
  return string.split(' ');
};

// Name Shuffler
const nameShuffler = function (str) {
  return str.split(' ').reverse().join(' ');
};

// validate code with simple regex
const validateCode = code => /^[123]/.test(code);

// You only need one - Beginner
const check = (a, x) => a.includes(x);

// Welcome!
const greet2 = function (language) {
  const greetings_db = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };

  return greetings_db[language] === undefined
    ? 'Welcome'
    : greetings_db[language];
};

// The 'if' function
const _if = function (bool, func1, func2) {
  return bool ? func1() : func2();
};

// Jenny's secret message
const greet3 = function (name) {
  if (name === 'Johnny') return 'Hello, my love!';
  return 'Hello, ' + name + '!';
};

// Reversed Words
const reverseWords = str => str.split(' ').reverse().join(' ');

// Grasshopper - Debug sayHello
const sayHello2 = name => `Hello, ${name}`;

// Will there be enough space?
const enough = function (cap, on, wait) {
  return on + wait < cap ? 0 : on + wait - cap;
};

// ES6 string addition
const joinStrings = (string1, string2) => `${string1} ${string2}`;

// Do I get a bonus?
const bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);

// Grasshopper - Personalized Message
const greet4 = (name, owner) => (name === owner ? 'Hello boss' : 'Hello guest');

// Find Maximum and Minimum Values of a List
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// Correct the mistakes of the character recognition software
const correct = function (string) {
  return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I');
};

// Switch it Up!
const switchItUp = function (number) {
  const numberWords = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };

  return numberWords[number];
};

// Grasshopper - Function syntax debugging
const main = function (verb, noun) {
  return verb + noun;
};

// Grasshopper - Messi goals function
const goals = function (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
};

// Find the first non-consecutive number
const firstNonConsecutive = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
};
