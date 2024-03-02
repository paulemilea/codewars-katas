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
