const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} 😩️`);
  }

};

const countLetters = function(string) {
  let output = {};
  for (let i = 0; i < string.length; i++) {
    
  }
  return output;
}

console.log(countLetters('hello'));