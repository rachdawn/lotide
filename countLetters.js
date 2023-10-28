const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//implement a function called countLetters that takes in a string
//and return a count of each of the letter in that string/sentence
//if 'LHL' return 2-L's 1-H
//use for of loop
const countLetters = function(string) {
  const object = {};

  for (const letter of string) {
    if (letter === " ") {
      continue;
    }

    if (object[letter]) {
      object[letter] += 1;
    } else {
      object[letter] = 1;
    }
  }
  return object;
};

const result = countLetters("count my letters");
console.log(result);
assertEqual(result["c"], 1);
assertEqual(result[" "], undefined);
assertEqual(result["t"], 3);

module.exports = countLetters;