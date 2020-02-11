const without = function(arr, itemToRemove) {
  return arr.filter(el => !itemToRemove.includes(el));
};

module.exports = without;
