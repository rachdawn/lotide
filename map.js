// assertion test:
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  
  const assertArraysEqual = function(arr1, arr2) {
    const areEqual = eqArrays(arr1, arr2);
    if (areEqual) {
      console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    }   else {
      console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
    }
  };


// implement map function
// take in two arguments: array to map, callback function
// return a new array based on results of callback function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["this", "is", "so", "much", "work"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ["t", "i", "s", "m", "w"]);

module.exports = map;