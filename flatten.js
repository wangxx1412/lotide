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

module.exports = flatten;
