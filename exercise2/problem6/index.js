function mapping(arr) {
  let pairs = {};
  for (let letter of arr) {
    pairs[letter] = letter.toUpperCase();
  }
  return pairs;
}

module.exports = mapping;

/*
console.log(mapping(["p", "s"])) // { "p": "P", "s": "S" }

console.log(mapping(["a", "b", "c"])) // { "a": "A", "b": "B", "c": "C" }

console.log(mapping(["a", "v", "y", "z"])) // { "a": "A", "v": "V", "y": "Y", "z": "Z" }
*/
