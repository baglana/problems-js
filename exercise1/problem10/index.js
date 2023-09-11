<<<<<<< HEAD
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
=======
function move() {
  // Your code
}

module.exports = move;
>>>>>>> 1a7b2e1d9605b833a4fe7ae5c830b7ffd4e05df6
