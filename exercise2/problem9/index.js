function duplicateNums(nums) {
  nums.sort((a, b) => a - b);
  let duplicates = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && !duplicates.includes(nums[i])) {
      duplicates.push(nums[i]);
    }
  }
  return duplicates;
}

module.exports = duplicateNums;

// console.log(duplicateNums([100, 59, 12, 13, 54, 76, 100, 14, 12]));

/*
console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])) // [3]

console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])) // [72, 81, 99]

console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // []
*/
