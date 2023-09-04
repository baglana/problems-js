function numOfDigits(int) {
  if (Math.abs(int) < 10)
    return 1;
  else
    return 1 + numOfDigits(Math.floor(int / 10));
}

module.exports = numOfDigits;

/*
console.log(numOfDigits(1000)) // 4

console.log(numOfDigits(12)) // 2

console.log(numOfDigits(1305981031)) // 10

console.log(numOfDigits(0)) // 1
*/
