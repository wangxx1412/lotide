// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //Check length of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(
      `${JSON.stringify(object1)} and ${JSON.stringify(
        object2
      )} length don't match`
    );
    return false;
  }
  //Check Values
  for (const keys of Object.keys(object1)) {
    //Check value one level nested array of object
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      return eqArrays(object1[keys], object2[keys]);
    }
    if (
      typeof object1[keys] === "object" &&
      object1[keys] !== null &&
      typeof object2[keys] === "object" &&
      object2[keys] !== null
    ) {
      return eqObjects(object1[keys], object2[keys]);
    }
    if (object1[keys] !== object2[keys]) {
      console.log(
        `${JSON.stringify(object1[keys])} !== ${JSON.stringify(object2[keys])}`
      );
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
