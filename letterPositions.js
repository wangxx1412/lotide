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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence.charAt(i)]) {
      results[sentence.charAt(i)].push(i);
    } else {
      results[sentence.charAt(i)] = [];
      results[sentence.charAt(i)].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("How are you doing?").o, [1, 9, 13]);
