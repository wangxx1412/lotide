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

const eqArrays = (a, b) => {
  if (a instanceof Array && b instanceof Array) {
    if (a.length != b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!eqArrays(a[i], b[i])) return false;
    }
    return true;
  } else {
    return a === b;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //Check length of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(
      `${JSON.stringify(object1)} and ${JSON.stringify(
        object2
      )} length don't match`
    );
    return false;
  }
  //Check Values
  for (const keys of Object.keys(object1)) {
    //Check value one level nested array of object
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      return eqArrays(object1[keys], object2[keys]);
    }
    if (
      typeof object1[keys] === "object" &&
      object1[keys] !== null &&
      typeof object2[keys] === "object" &&
      object2[keys] !== null
    ) {
      return eqObjects(object1[keys], object2[keys]);
    }
    if (object1[keys] !== object2[keys]) {
      console.log(
        `${JSON.stringify(object1[keys])} !== ${JSON.stringify(object2[keys])}`
      );
      return false;
    }
  }
  return true;
};

//Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const abb = { a: "1", b: "1" };
assertEqual(eqObjects(ab, abb), false);

const bba = { a: "1", c: "1" };
assertEqual(eqObjects(ab, bba), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const cd3 = { c: "1", d: "4" };
assertEqual(eqObjects(cd, cd3), false);

const cd4 = { c: ["1", "2"], d: ["2", 3, 4] };
const cd5 = { c: ["1"], d: ["2", 3, 4] };
assertEqual(eqObjects(cd4, cd5), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
