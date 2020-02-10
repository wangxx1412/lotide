const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  it("returns drama for 'The wire' in bestTVShowsByGenre", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for 'The 70's Show' in bestTVShowsByGenre", () => {
    assert.deepEqual(
      findKeyByValue(bestTVShowsByGenre, "The 70's Show"),
      undefined
    );
  });
  it("returns sci-fi for 'The expanse in bestTVShowsByGenre", () => {
    assert.deepEqual(
      findKeyByValue(bestTVShowsByGenre, "The Expanse"),
      "sci_fi"
    );
  });
});
