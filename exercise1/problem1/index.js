/*
function numOfDigits(int) {
  if (Math.abs(int) < 10) {
    return 1;
  }
  return 1 + numOfDigits(Math.floor(int / 10));
}
*/

// using string property length
function numOfDigits(int) {
  return Math.abs(int).toString().length;
}

export default numOfDigits;
