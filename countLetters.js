const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected} ✨️✨️`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected} 😩️`);
  }

};

const countLetters = function(string) {
  let output = {};
  for (letter of string) {
    if (letter !== ' ') {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters('hello'));