const middle = require("../middle");
const assert = require('chai').assert;

describe("#middle", () => {
    it("returns the middle most element(s) of an array", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    });
    it("returns the middle most element(s) of an array", () => {
      assert.deepEqual(middle([11, 22, 33, 44, 55]), [33]);
    });
    it("returns the middle most element(s) of an array", () => {
      assert.deepEqual(middle(['dog', 'cat', 'ferret']), ['cat']);
    });
});

