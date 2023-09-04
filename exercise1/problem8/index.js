function longestTime(h, m, s) {
  hSeconds = h * 60 * 60;
  mSeconds = m * 60;
  const maxSeconds = Math.max(hSeconds, mSeconds, s);
  if (maxSeconds === s) return s;
  else if (maxSeconds === mSeconds) return m;
  else return h;
}

module.exports = longestTime;

/*
console.log(longestTime(1, 59, 3598)) // 1

console.log(longestTime(2, 300, 15000)) // 300

console.log(longestTime(15, 955, 59400)) // 59400
*/
