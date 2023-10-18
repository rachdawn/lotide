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
    let firstElement = input[0].toString();
    return firstElement;
  } else {
    return "undefined";
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
