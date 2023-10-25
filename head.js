//create a function that returns the first element of an array, "the head"
// an empty array should yield "undefined" as its head

const head = function(input) {
  if (input.length >= 1) {
    return input[0];
  }
};

module.exports = head;


