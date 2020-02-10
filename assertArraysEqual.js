const eqArrays = require("./eqArrays");

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

module.exports = assertArraysEqual;
