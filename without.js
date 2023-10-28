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
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// implement a without function which returns a subset of an array, removing unwanted elements
// take in 'source' array and 'itemsToRemove' array
// return new array, don't modify original

const without = function(arr1, arr2) {
  const source = arr1;
  const itemsToRemove = arr2;
  let arrayWithout = [];
    for (const element of source) {
        if (!itemsToRemove.includes(element)) {
            arrayWithout.push(element);
        }
    }
  return arrayWithout;
};

// test cases:
assertArraysEqual(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

module.exports = without;