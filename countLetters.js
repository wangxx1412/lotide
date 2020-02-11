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

module.exports = countLetters;
