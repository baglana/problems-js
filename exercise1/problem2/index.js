function intWithinBounds(n, lower, upper) {
  if (!Number.isInteger(n)) {
    return false;
  }
  return lower < n && n < upper;
}

module.exports = intWithinBounds;