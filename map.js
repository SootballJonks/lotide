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
    console.log(`✅️✅️✅️ Assertion Passed: ${array1} === ${array2} ✨️✨️`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${array1} !== ${array2} 😩️`);
  }

};

//--------------------------

const map = function(array, callback) {
  const results = [];
  for (let elem of array) {
    results.push(callback(elem));
  }
  return results;
};



const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["gross", "clapping", "together", "meaty", "tips"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, results2);
assertArraysEqual(results2, ['yo', 'that', 'is', 'an', 'acceptable', 'set', 'of', 'words']);