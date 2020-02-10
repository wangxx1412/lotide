const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });
  it("original arrays should not be modified", () => {
    const input = [1, 2, 3];
    tail(input);
    assert.deepEqual(input, [1, 2, 3]);
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
