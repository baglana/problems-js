function removeABC(string) {
  const regex = /[a-c]/g;
  if (!string.match(regex))
    return null;
  else
    return string.replace(regex, '');
}

module.exports = removeABC;

/*
console.log(removeABC("This might be a bit hard")) // "This might e  it hrd"

console.log(removeABC("hello world!")) // null

console.log(removeABC("")) // null
*/
