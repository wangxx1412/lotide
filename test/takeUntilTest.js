const assert = require("chai").assert;
const { takeUntil } = require("../index");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood"
// ];
// const results2 = takeUntil(data2, x => x === ",");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(
      takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),
      [1, 2, 5, 7, 2]
    );
  });
});
