const eqArrays = require('./assertEqual');

const assertArraysEqual = function(arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }   else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


assertArraysEqual([22, 33, 44], [22, 33, 44]);
assertArraysEqual([22, 33, 44], [22, 33, 4]);

module.exports = assertArraysEqual;
