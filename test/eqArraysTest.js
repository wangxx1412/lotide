const { eqArrays } = require("../index");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("returns true for comparing [1,2,3] and [1,2,3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for comparing ['1','2','3'] and ['1','2',3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("returns false for comparing [1,2,3,4] and [1,2,3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });
  it("returns true for comparing ['1', '2', '3'] and ['1','2','3']", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns true for comparing [] and []", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("returns true for comparing [1] and [2]", () => {
    assert.deepEqual(eqArrays([1], [2]), false);
  });
  it("returns true for comparing [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false for comparing [2, [4]] and [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([2, [4]], [[2, 3], [4]]), false);
  });
  it("returns false for comparing [2, [4]] and [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([2, [4]], [[2, 3], [4]]), false);
  });
  it("returns false for comparing [[2, 3, 5], [4]] and [[2, 3], [4,5]]", () => {
    assert.deepEqual(
      eqArrays(
        [[2, 3, 5], [4]],
        [
          [2, 3, 5],
          [4, 5]
        ]
      ),
      false
    );
  });
  it("returns false for comparing [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});
