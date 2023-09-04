function makeTitleCase(string) {
  const tokens = string.split(' ');
  for (let i in tokens) {
    tokens[i] = tokens[i].substring(0, 1).toUpperCase()
      + tokens[i].substring(1);
  }
  return tokens.join(' ');
}

module.exports = makeTitleCase;

/*
console.log(makeTitleCase("This is a title")) // "This Is A Title"

console.log(makeTitleCase("capitalize every word")) // "Capitalize Every Word"

console.log(makeTitleCase("I Like Pizza")) // "I Like Pizza"

console.log(makeTitleCase("PIZZA PIZZA PIZZA")) // "PIZZA PIZZA PIZZA"
*/
