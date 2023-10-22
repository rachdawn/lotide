// assertion test:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays:
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
//

// implement middle function which takes in an array and return the middle-most element(s)

const middle = function(array) {
    let oddMiddle = [];
    let evenMiddle = [];
  if (array.length % 2 !== 0) {
    // return middle element
    oddMiddle = Math.floor(array.length / 2);
    return array[oddMiddle];
  } else if (array.length % 2 === 0) {
    // return two middle elements
    const evenMiddle1 = (array.length / 2) - 1;
    const evenMiddle2 = (array.length / 2);
    evenMiddle = array[evenMiddle1], array[evenMiddle2];
    return evenMiddle;
  }
  return [];
};

assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [2]
assertEqual(middle([11, 22, 33, 44, 55]), [33]); // => [3]
assertEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

