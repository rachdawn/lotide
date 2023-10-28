const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
    it("returns an array without its first element", () => {
      assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    });
    it("returns an array without its first element", () => {
        assert.deepEqual(tail(['dog', 'cat', 'bird']), ['cat', 'bird']);
    });
    it("fails to return an array without its first element", () => {
        assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['hello', 'lighthouse']);
    });
});   

