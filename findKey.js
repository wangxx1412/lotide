const findKey = (obj, cb) => {
  let key;
  for (const el in obj) {
    if (cb instanceof Function) {
      if (cb(obj[el])) {
        return (key = el);
      }
    }
    if (JSON.stringify(cb) == JSON.stringify(obj[el])) {
      return (key = el);
    }
  }
  return key;
};

module.exports = findKey;
