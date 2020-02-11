const takeUntil = function(array, callback) {
  let result = [];
  for (const el of array) {
    if (callback(el)) {
      return result;
    }
    result.push(el);
  }
  return result;
};

module.exports = takeUntil;
