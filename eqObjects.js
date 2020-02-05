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

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //Check length of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log("length dont match");
    return false;
  }
  for (const keys of Object.keys(object1)) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      return eqArrays(object1[keys], object2[keys]);
    }
    if (object1[keys] !== object2[keys]) {
      console.log(`${object1[keys]} ${object2[keys]}`);
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
