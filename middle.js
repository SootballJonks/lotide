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

const middle = function(array) {
  if (array.length <= 2){
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice((array.length / 2) -1, (array.length / 2) + 1);
  } else {
    return array.slice((array.length / 2), (array.length / 2) + 1)
  }
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => [])
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]