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

module.exports = middle;
