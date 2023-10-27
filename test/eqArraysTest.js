const eqArrays = require("../eqArrays")
const assertEqual = require("../assertEqual")


// test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([22, 33, 44], [22, 33, 44]), true); // pass
assertEqual(eqArrays([22, 33, 44], [21, 33, 44]), false); // fail
assertEqual(eqArrays([22, 33, 44], [22, 33, '44']), false); // fail
assertEqual(eqArrays([22, 33, 44], [22, 33, 44, 55]), false); // fail
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // pass
