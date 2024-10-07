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

// Deletion in an array
const deleteValues = function (array, pred) {
  let i = array.length;
  while (i >= 0) {
    i--;
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
};

// Remove the minimum
const removeSmallest = function (numbers) {
  const smallestValue = Math.min(...numbers);
  const indexOfSmallestValue = numbers.findIndex(v => v === smallestValue);
  return numbers.filter((_v, i) => i !== indexOfSmallestValue);
};

// Failed Filter - Bug Fixing #3
const FilterNumbers = function (str) {
  return str
    .split('')
    .filter(v => !v.match(/[0-9]/g))
    .join('');
};

// Sum of array singles
const repeats = function (arr) {
  const occurences = arr.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(occurences)
    .filter(([_i, v]) => v === 1)
    .map(([i, _v]) => Number(i))
    .reduce((acc, v) => acc + v);
};

// Thinkful - String Drills: Quotable
const quotable = function (name, quote) {
  return `${name} said: "${quote}"`;
};

// Sum of Minimums!
const sumOfMinimums = function (arr) {
  return arr.map(innerArr => Math.min(...innerArr)).reduce((acc, v) => acc + v);
};

// String reverse slicing 101
const reverseSlice = function (str) {
  return str
    .split('')
    .reverse()
    .map((_, i, arr) => arr.slice(i).join(''));
};

// Find the missing element between two arrays
const findMissing = function (arr1, arr2) {
  const arr1Sorted = arr1.sort((a, b) => a - b);
  const arr2Sorted = arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1Sorted.length; i++) {
    if (arr1Sorted[i] !== arr2Sorted[i]) return arr1Sorted[i];
  }
};

// Odd Ones Out!
const oddOnesOut = function (nums) {
  const occurences = nums.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  return nums.filter(value => occurences[value] % 2 === 0);
};

// String Reversing, Changing case, etc.
const reverseAndMirror = function (s1, s2) {
  const invertCaseAndReverse = function (str, reverse = false) {
    const caseInvertedChars = str
      .split('')
      .map(letter =>
        letter === letter.toUpperCase()
          ? letter.toLowerCase()
          : letter.toUpperCase()
      );

    return reverse
      ? caseInvertedChars.reverse().join('')
      : caseInvertedChars.join('');
  };

  const formattedS1 =
    invertCaseAndReverse(s1, true) + invertCaseAndReverse(s1, false);
  const formattedS2 = invertCaseAndReverse(s2, true);

  return [formattedS2, formattedS1].join('@@@');
};

// Convert an array of strings to array of numbers
const toNumberArray = function (stringarray) {
  return stringarray.map(str => +str);
};

// Divide and Conquer
const divCon = function (x) {
  let sumNums = 0;
  let sumStrs = 0;
  for (const el of x) {
    if (typeof el === 'number') sumNums += el;
    if (typeof el === 'string') sumStrs += Number(el);
  }
  return sumNums - sumStrs;
};

// From A to Z
const gimmeTheLetters = function (sp) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const start = charset.indexOf(sp[0]);
  const finish = charset.indexOf(sp[2]);

  let result = '';

  for (let i = start; i <= finish; i++) {
    result += charset[i];
  }

  return result;
};

// Sum of integers in string
const sumOfIntegersInString = function (s) {
  const intsArr = s.match(/[0-9]+/g);

  return intsArr === null
    ? 0
    : intsArr.reduce((acc, value) => acc + Number(value), 0);
};

// Spot the Differences
const spot = function (s1, s2) {
  if (s1 === s2) return [];

  const result = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      result.push(i);
    }
  }

  return result;
};

// Highest and Lowest
const highAndLow = numbers =>
  [
    String(Math.max(...numbers.split(' ').map(v => +v))),
    String(Math.min(...numbers.split(' ').map(v => +v))),
  ].join(' ');

// Beginner Series #3 Sum of Numbers
const getSum = function (a, b) {
  const result = [];

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    result.push(i);
  }

  return result.reduce((acc, v) => acc + v);
};

// esreveR gnirtS
String.prototype.reverse = function () {
  return this.split(' ')
    .map(word => word.split('').reverse().join(''))
    .reverse()
    .join(' ');
};

// Divisible by previous digit?
const divisibleByLast = function (n) {
  const numToArray = String(n)
    .split('')
    .map(v => Number(v));

  return numToArray.map((v, i, arr) => v % arr[i - 1] === 0);
};

// Email Address Obfuscator
const obfuscate = function (email) {
  const emailWithoutDots = email.replaceAll('.', ' [dot] ');
  return emailWithoutDots.replace('@', ' [at] ');
};

// Sum a list but ignore any duplicates
const sumNoDuplicates = function (numList) {
  const occurences = numList.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});

  let sum = 0;

  for (const [key, value] of Object.entries(occurences))
    if (value === 1) sum += Number(key);

  return sum;
};

// Summing a number's digits
const sumDigits = function (number) {
  const absNumber = Math.abs(number);

  return absNumber
    .toString()
    .split('')
    .reduce((acc, v) => acc + Number(v), 0);
};

// Convert Hash To An Array
const convertHashToArray = function (hash) {
  return Object.entries(hash);
};

// Number Pairs
const getLargerNumbers = function (a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] || a[i] === b[i] ? result.push(a[i]) : result.push(b[i]);
  }

  return result;
};

// Simple Fun #176: Reverse Letter
const reverseLetter = function (str) {
  return str
    .split('')
    .filter(letter => letter.match(/[a-z]/))
    .reverse()
    .join('');
};

// Check three and two
const checkThreeAndTwo = function (array) {
  const occurences = array.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});

  const occurrenceCounts = Object.values(occurences);

  return occurrenceCounts.includes(3) && occurrenceCounts.includes(2);
};

// Between Extremes
const betweenExtremes = function (numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
};

// Return the Missing Element
const getMissingElement = function (arr) {
  for (let i = 0; i < 10; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
};

// Find the Missing Number
const missingNo = function (nums) {
  for (let i = 0; i <= 100; i++) {
    if (!nums.includes(i)) return i;
  }
};

// Friend or Foe?
const friend = function (friends) {
  return friends.filter(friend => friend.length === 4);
};

// Disemvowel Trolls
const disemvowel = function (str) {
  return str
    .split('')
    .filter(letter => !letter.match(/[aeiouAEIOU]/))
    .join('');
};

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

// Find min and max
const getMinMax = function (arr) {
  return [Math.min(...arr), Math.max(...arr)];
};

// Number to digit tiers
const createArrayOfTiers = function (num) {
  const digits = num.toString().split('');

  let str = digits[0];
  const result = [];

  for (let i = 0; i < digits.length; i++) {
    i !== 0 ? (str += digits[i]) : str;
    result.push(str);
  }

  return result;
};

// Last
const last = function (...args) {
  if (args.length === 1) {
    const arg = args[0];
    if (Array.isArray(arg) || typeof arg === 'string') {
      return arg[arg.length - 1];
    } else {
      return arg;
    }
  } else {
    return args[args.length - 1];
  }
};

// Double Every Other
const doubleEveryOther = function (a) {
  return a.map((v, i) => (i % 2 !== 0 ? v * 2 : v));
};

// Length and two values.
const alternate = function (n, firstValue, secondValue) {
  const result = [];

  if (n > 0) {
    for (let i = 0; i < n; i++) {
      i % 2 === 0 ? result.push(firstValue) : result.push(secondValue);
    }
    return result;
  } else {
    return result;
  }
};

// Sum of two lowest positive integers
const sumTwoSmallestNumbers = function (numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, v) => acc + v);
};

// Lowercase strings in array
const arrayLowerCase = arr =>
  arr.map(v => (typeof v !== 'string' ? v : v.toLowerCase()));

// Indexed capitalization
const capitalize = function (s, arr) {
  return s
    .split('')
    .map((v, i) => (arr.includes(i) ? v.toUpperCase() : v))
    .join('');
};

// V A P O R C O D E
const vaporcode = function (string) {
  return string
    .toUpperCase()
    .split('')
    .filter(char => char !== ' ')
    .join('  ');
};

// No oddities here
const noOdds = function (values) {
  return values.filter(value => value % 2 === 0);
};

// Descending Order
const descendingOrder = n =>
  +String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');
