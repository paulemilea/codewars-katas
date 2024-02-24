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
const multiply = function (number) {
  // const numberOfDigits = String(number).replace('-', '').length;
  const numberOfDigits = String(Math.abs(number)).length;
  return number * 5 ** numberOfDigits;
};
