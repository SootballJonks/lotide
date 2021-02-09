# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sootball/lotide`

**Require it:**

`const _ = require('@sootball/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Takes an array as a parameter and returns the first element from the array.
* `middle(array)`: Takes an array as a parameter and returns an array containing the elements that were in the middle-most position. If the given array is even, it will return the middle two elements. Will return an empty array if the given array has two or less elements.
* `tail(array)`: Takes an array as a parameter and returns the given array with the first value removed.