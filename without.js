const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    for (let j = i; j <= i; j++) {
      if (array1[i] !== array2[j]) {
        return false;
      }
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅️✅️✅️Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${array1} !== ${array2} 😩️`);
  }

};

const without = function(source, itemsToRemove) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  return output;
};

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
