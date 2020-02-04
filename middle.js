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

const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 1) {
    return [array[(array.length - 1) / 2]];
  }
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
