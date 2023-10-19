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
    const arrayTail = input.splice(1);
    return arrayTail;
  }

};


// test code
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case 1: Check the returned array elements
//const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const pets = tail(["dog", "cat", "bird"]);
assertEqual(pets.length, 2);
assertEqual(pets[0], "cat");
assertEqual(pets[1], "bird");
