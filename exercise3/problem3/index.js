function pentagonal(num) {
  if (num <= 1) {
      return 1;
  }

  return 5 * (num - 1) + pentagonal(num - 1);
}

console.log(pentagonal(1)) // 1

console.log(pentagonal(2)) // 6

console.log(pentagonal(3)) // 16

console.log(pentagonal(8)) // 141

export default pentagonal;
