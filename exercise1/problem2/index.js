function intWithinBounds(n, lower, upper) {
  if (!Number.isInteger(n)) {
    return false;
  }
  return lower < n && n < upper;
}

module.exports = intWithinBounds;

console.log(intWithinBounds(3, 1, 9)) // true

console.log(intWithinBounds(6, 1, 6)) // false

console.log(intWithinBounds(4.5, 3, 8)) // false
