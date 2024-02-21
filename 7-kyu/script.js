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
