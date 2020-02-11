const assert = require("chai").assert;
const { findKey } = require("../index");

describe("#findKey", () => {
  const result1 = findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    x => x.stars === 2
  );
  const users = {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  };
  const result2 = findKey(users, function(o) {
    return o.age < 40;
  });
  const result3 = findKey(users, { age: 1, active: true });
  it("returns noma for 'x => x.stars === 2'", () => {
    assert.deepEqual(result1, "noma");
  });
  it("returns barney for o.age < 40", () => {
    assert.deepEqual(result2, "barney");
  });
  it("returns pebbles for { age: 1, active: true }", () => {
    assert.deepEqual(result3, "pebbles");
  });
});
