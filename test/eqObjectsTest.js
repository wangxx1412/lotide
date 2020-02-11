const { eqObjects } = require("../index");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  // assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

  it("returns true for comparing { a: '1', b: '2' } and { b: '2', a: '1' }", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  it("returns false for comparing { a: '1', b: '2' } and { a: '1', b: '2', c: '3' }", () => {
    assert.deepEqual(
      eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }),
      false
    );
  });
  it("returns false for comparing { a: '1', b: '2' } and { a: '1', b: '1' }", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "1" }), false);
  });
  it("returns false for comparing { a: '1', b: '2' } and { a: '1', c: '1' }", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { a: "1", c: "1" }), false);
  });
  it("returns true for comparing { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    assert.deepEqual(
      eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }),
      true
    );
  });
  it("returns false for comparing { c: '1', d: ['2', 3] } and { c: '1', d: ['2', 3, 4] }", () => {
    assert.deepEqual(
      eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }),
      false
    );
  });
  it("returns false for comparing { c: '1', d: ['2', 3] } and { c: '1', d: '4' }", () => {
    assert.deepEqual(
      eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: "4" }),
      false
    );
  });
  it("returns true for comparing { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(
      eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    );
  });
  it("returns true for comparing { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      false
    );
  });
});
