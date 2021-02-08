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

module.exports = eqArrays;