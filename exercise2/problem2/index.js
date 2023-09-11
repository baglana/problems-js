function sortIt(arr) {
  arr.sort((a, b) => {
    a = Array.isArray(a) ? a[0] : a;
    b = Array.isArray(b) ? b[0] : b;
    return a - b;
  });
  return arr;
}

module.exports = sortIt;

// console.log(sortIt([4, 1, 3])) // [1, 3, 4]

/*
console.log(sortIt([[4], [1], [3]])) // [[1], [3], [4]]

console.log(sortIt([4, [1], 3])) // [[1], 3, 4]

console.log(sortIt([[4], 1, [3]])) // [1, [3], [4]]

console.log(sortIt([[3], 4, [2], [5], 1, 6])) // [1, [2], [3], 4, [5], 6]
*/
