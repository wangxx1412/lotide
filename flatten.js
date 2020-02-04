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

const flatten = function(arr) {
  let flattenArr = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      console.log(el);
      flattenArr.push(...el);
    } else {
      flattenArr.push(el);
    }
  });
  return flattenArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2]]), [1, 2]);
