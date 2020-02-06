const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `😃 Assertion Passed: "${actual}" === "${expected}"`
    );
  } else {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `😭 Assertion Failed: "${actual}" !== "${expected}"`
    );
  }
};

const findKey = (obj, cb) => {
  let key;
  for (const el in obj) {
    if (cb instanceof Function) {
      if (cb(obj[el])) {
        return (key = el);
      }
    }
    if (JSON.stringify(cb) == JSON.stringify(obj[el])) {
      return (key = el);
    }
  }
  return key;
};

//Test Code
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
assertEqual(result1, "noma");

const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true }
};

const result2 = findKey(users, function(o) {
  return o.age < 40;
});
assertEqual(result2, "barney");

const result3 = findKey(users, { age: 1, active: true });
assertEqual(result3, "pebbles");
