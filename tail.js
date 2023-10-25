const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// create a function that returns the "tail" of an array (everything but the head)

const tail = function(input) {
  if (input.length >= 1) {
    const arrayTail = input.slice(1);
    return arrayTail;
  } else {
    return [];
  }
};


module.exports = tail;