const eqArrays = (a, b) => {
  if (a instanceof Array && b instanceof Array) {
    if (a.length != b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!eqArrays(a[i], b[i])) return false;
    }
    return true;
  } else {
    return a === b;
  }
};

module.exports = eqArrays;
