function numbersSum(arr) {
  return arr.reduce((acc, val) =>
    (typeof val === "number") ? acc + val : acc, 0)
}

module.exports = numbersSum;

/*
console.log(numbersSum([1, 2, "13", "4", "645"])) // 3

console.log(numbersSum([true, false, "123", "75"])) // 0

console.log(numbersSum([1, 2, 3, 4, 5, true])) // 15
*/
