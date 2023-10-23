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

export default move;
