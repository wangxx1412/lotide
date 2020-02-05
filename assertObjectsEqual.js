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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `\tPASS ✅ ${inspect(actual)} is equal to ${inspect(expected)}`
    );
    return;
  }
  console.log(
    "\x1b[31m%s\x1b[0m",
    `\tFAIL 🛑 ${inspect(actual)} is NOT equal to ${inspect(expected)}`
  );
};

assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 2 }); // => will pass
assertObjectsEqual({ a: "1", b: 2 }, { a: "1", b: 3 }); // => will fail
