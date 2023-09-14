function move(str) {
  let arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    moveChar(i, str, arr);
  }
  return arr.join('');
}

function moveChar(i, str, arr) {
  const charMap = {
    z: 'a',
    Z: 'A'
  }
  const oldChar = str.charAt(i);
  let newChar;
  switch (oldChar) {
    case 'z':
    case 'Z':
      newChar = charMap[oldChar];
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

console.log(move("zZ")); // "aA"

console.log(move("hello")) // "ifmmp"

console.log(move("bye")) // "czf"

console.log(move("welcome")) // "xfmdpnf"
