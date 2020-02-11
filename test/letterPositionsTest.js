const assert = require("chai").assert;
const { letterPositions } = require("../index");

describe("#letterPositions", () => {
  it("returns [1] for 'e' in 'hello' ", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [2,3] for 'l' in 'hello' ", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("returns [1,9,13] for 'o' in 'How are you doing?' ", () => {
    assert.deepEqual(letterPositions("How are you doing?").o, [1, 9, 13]);
  });
});
