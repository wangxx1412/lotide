const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays([1], [2]), false);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
// assertEqual(eqArrays([2, [4]], [[2, 3], [4]]), false);
// assertEqual(
//   eqArrays(
//     [[2, 3, 5], [4]],
//     [
//       [2, 3, 5],
//       [4, 5]
//     ]
//   ),
//   false
// ); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
