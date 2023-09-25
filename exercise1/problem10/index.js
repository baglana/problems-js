function move(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    str = str.replace(char, getNextChar(char));
  }
  return str;
}

function getNextChar(char) {
  const edgeCases = {
    z: 'a',
    Z: 'A'
  }
  if (char in edgeCases) {
    return edgeCases[char];
  }
  let charCode = char.charCodeAt(0);
  charCode++;
  return String.fromCharCode(charCode);
}

/*
function move(str) {
  const chars = str.split('');
  for (let i = 0; i < str.length; i++) {
    moveChar(i, str, chars);
  }
  return chars.join('');
}
*/

function moveChar(i, str, arr) {
  const charDict = {
    z: 'a',
    Z: 'A'
  }
  const oldChar = str.charAt(i);
  let newChar;
  switch (oldChar) {
    case 'z':
    case 'Z':
      newChar = charDict[oldChar];
      break;
    default:
      let charCode = str.charCodeAt(i);
      charCode++;
      newChar = String.fromCharCode(charCode);
/*
      // Using codePoint string methods
      let codePoint = str.codePointAt(i);
      codePoint++;
      newChar = String.fromCodePoint(codePoint);
*/
      break;
  }
  arr.splice(i, 1, newChar);
}

module.exports = move;