const assert = require("chai").assert;
const { countLetters } = require("../index");

describe("#countLetter", () => {
  const testStr = "Hello World!";
  const testLetterMap = countLetters(testStr);
  it("returns 1 for 'h' in 'Hello World!'", () => {
    assert.strictEqual(testLetterMap["h"], 1);
  });
  it("returns 3 for 'l' in 'Hello World!'", () => {
    assert.strictEqual(testLetterMap["l"], 3);
  });
  it("returns 2 for 'o' in 'Hello World!'", () => {
    assert.strictEqual(testLetterMap["o"], 2);
  });
});
