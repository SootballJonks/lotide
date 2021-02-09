const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays');

console.log(`eqArrays testing:`);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(`------`);