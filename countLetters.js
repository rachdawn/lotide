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
    if (string[letter]) {
        if (string[letter] === object[letter]) {
        object[letter] += 1;
        }
        if (string[letter] === " ") {
        object[letter]++;
        } else {
        object[letter] = 1;
        }
    }
    return object;
};

console.log(countLetters("count my letters"));

assertEqual(countLetters(object["c"], 1));
