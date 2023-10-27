// implement middle function which takes in an array and return the middle-most element(s)

const middle = function(array) {
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

module.exports = middle;
