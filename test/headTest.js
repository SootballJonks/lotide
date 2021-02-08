const assertEqual = require('../assertEqual');
const head = require('../head');

const arr = [ 'one', 'two', 'three', 'four' ];
assertEqual(head(arr), 'one');