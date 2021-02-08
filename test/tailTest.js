const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', () => {
  it(`should return the given array, but with its first element removed`, () => {
    const arr = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(arr), ["Lighthouse", "Labs"])
  });
});
