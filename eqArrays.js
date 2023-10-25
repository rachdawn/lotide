// assertion test
const assertEqual = require('../assertEqual');

// write a function that can compare two arrays for a perfect
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([22, 33, 44], [22, 33, 44]), true); // pass
assertEqual(eqArrays([22, 33, 44], [21, 33, 44]), false); // fail
assertEqual(eqArrays([22, 33, 44], [22, 33, '44']), false); // fail
assertEqual(eqArrays([22, 33, 44], [22, 33, 44, 55]), false); // fail
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // pass

module.exports = eqArrays;