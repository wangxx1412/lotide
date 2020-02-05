const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`😭 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
const cleanString = function(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
};

const countLetters = function(str) {
  let letterMap = {};
  const cleanedStr = cleanString(str);
  for (const letter of cleanedStr) {
    if (letterMap[letter]) {
      letterMap[letter] += 1;
    } else {
      letterMap[letter] = 1;
    }
  }
  return letterMap;
};

//Test code
const testStr = "Hello World!";
const testLetterMap = countLetters(testStr);

assertEqual(testLetterMap["h"], 1);
assertEqual(testLetterMap["l"], 3);
assertEqual(testLetterMap["o"], 2);
