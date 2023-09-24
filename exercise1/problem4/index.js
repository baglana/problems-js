function makeTitleCase(string) {
  const tokens = string.split(' ');
  for (let i in tokens) {
    tokens[i] = capitalizeFirstCharOf(tokens[i]);
  }
  return tokens.join(' ');
}

function capitalizeFirstCharOf(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = makeTitleCase;