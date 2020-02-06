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

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `\tPASS ✅ ${JSON.stringify(arr1)} is equal to ${JSON.stringify(arr2)}`
    );
    return;
  }
  console.log(
    "\x1b[31m%s\x1b[0m",
    `\tFAIL 🛑 ${JSON.stringify(arr1)} is NOT equal to ${JSON.stringify(arr2)}`
  );
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test Code

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const fruits = ["apple", ["banana", "melon"], [3, "cherry"]];
const results2 = map(fruits, word => word[0]);
assertArraysEqual(results2, ["a", "banana", 3]);

const fruits2 = [["apple", "pear"], ["banana", "melon"], []];
const results3 = map(fruits2, word => word[0]);
assertArraysEqual(results3, ["apple", "banana", undefined]);
