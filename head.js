const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//create a function that returns the first element of an array, "the head"
// an empty array should yield "undefined" as its head

const head = function(input) {
  if (input.length >= 1) {
    return input[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["rachel"]), "rachel");
assertEqual(head(["rachel"]), "Rachel");
assertEqual(head([]));

