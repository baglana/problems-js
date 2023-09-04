function isDisarium(n) {
  const N = n;
  const len = n.toString().length;
  let sum = 0;
  for (let pos = len; n !== 0; pos--) {
    sum += Math.pow(n % 10, pos);
    n = Math.floor(n / 10);
  }
  return sum === N;
}

module.exports = isDisarium;

/*
console.log(isDisarium(75)) // false
// 7^1 + 5^2 = 7 + 25 = 32

console.log(isDisarium(135)) // true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

console.log(isDisarium(544)) // false

console.log(isDisarium(518)) // true

console.log(isDisarium(8)) // true

console.log(isDisarium(466)) // false
*/
