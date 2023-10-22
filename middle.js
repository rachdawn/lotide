// assertion test:
const assertArraysEqual = function (arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// eqArrays:
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
//

// implement middle function which takes in an array and return the middle-most element(s)

const middle = function (array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    // return middle element
    const oddMiddle = Math.floor(array.length / 2);
    return [array[oddMiddle]];
  } else {
    // return two middle elements
    const evenMiddle1 = array.length / 2 - 1;
    const evenMiddle2 = array.length / 2;
    const evenMiddle = [array[evenMiddle1], array[evenMiddle2]];
    return evenMiddle;
  }
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([11, 22, 33, 44, 55]), [33]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
