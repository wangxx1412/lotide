# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @wangxx2020/lotide`

**Require it:**

`const _ = require('@wangxx2020/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: returns the first element of input array
- `tail(...)`: returns every elements except the first element of input array
- `middle(...)`: returns the middle element(s) of input array
- `assertArraysEqual(...)`: console log the array comparison result
- `assertEqual(...)`: console log the comparison result
- `assertObjectsEqual(...)`: console log the objects comparison result
- `countLetters(...)`: returns the count of letters for input string
- `eqArrays(...)`: compare two input arrays and returns a boolean result
- `eqObjects(...)`: compare two input obejcts and returns a boolean result
- `findKeys(...)`: takes an object and a callback function, returns keys of object that pass through call back function
- `findKeysByValue(...)`: takes an object and value, returns the key of the value in the object
- `flatten(...)`: takes a multi-level nested array and returns one level array
- `letterPositions(...)`: takes a string and returns an object with unique letter as keys and the indexes of it in an array
- `map(...)`: takes an array and callback function as input, iterate the array and apply callback func on each element and return a new array
- `takeUntil(...)`: takes an array and callback function, iterate the array and output until the callback function passed for a certain element, return an array containing the elements before the stop element
- `without(...)`: takes two arrays as input, returns a new array as first array without elements contains in the second array.
