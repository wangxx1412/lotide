const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `😃 Assertion Passed: "${actual}" === "${expected}"`
    );
  } else {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `😭 Assertion Failed: "${actual}" !== "${expected}"`
    );
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [2]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([2, [4]], [[2, 3], [4]]), false);
assertEqual(
  eqArrays(
    [[2, 3, 5], [4]],
    [
      [2, 3, 5],
      [4, 5]
    ]
  ),
  false
); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
