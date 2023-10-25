const tail = require('../tail');
const assertEqual = require('../assertEqual')

// test code
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const pets = tail(["dog", "cat", "bird"]);
assertEqual(pets.length, 2);
assertEqual(pets[0], "cat");
assertEqual(pets[1], "bird");