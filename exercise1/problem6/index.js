function insertWhitespace(string) {
  let chars = string.split('');
  for (let i = 0; i < chars.length - 1; i++) {
    if (checkPattern(chars[i], chars[i + 1])) {
      chars.splice(i + 1, 0, ' ');
    }
  }

  return chars.join('');
}

function checkPattern(char1, char2) {
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  return lowerCaseRegex.test(char1)
      && upperCaseRegex.test(char2);
}

module.exports = insertWhitespace;