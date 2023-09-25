function isDisarium(n) {
  const num = n;
  const len = n.toString().length;
  let sum = 0;
  for (let pos = len; n > 0; pos--) {
    sum += (n % 10) ** pos;
    n = Math.floor(n / 10);
  }
  return sum === num;
}

module.exports = isDisarium;