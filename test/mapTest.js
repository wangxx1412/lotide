const assert = require("chai").assert;
const { map } = require("../index");

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const fruits2 = [["apple", "pear"], ["banana", "melon"], []];
  it("returns the first letter of each word", () => {
    assert.deepEqual(
      map(words, word => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });
  it("returns undefined for []", () => {
    assert.deepEqual(
      map(fruits2, word => word[0]),
      ["apple", "banana", undefined]
    );
  });
});
