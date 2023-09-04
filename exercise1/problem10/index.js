function move(str) {
  let arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    let codePoint = str.codePointAt(i);
    codePoint++;
    arr.splice(i, 1, String.fromCodePoint(codePoint));
  }
  return arr.join('');
}

module.exports = move;

/*
console.log(move("hello")) // "ifmmp"

console.log(move("bye")) // "czf"

console.log(move("welcome")) // "xfmdpnf"
*/
