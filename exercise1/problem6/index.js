<<<<<<< HEAD
function insertWhitespace(string) {
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;

  let arr = string.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].match(lowerCaseRegex) && arr[i + 1].match(upperCaseRegex)) {
      arr.splice(i + 1, 0, ' ');
    }
  }

  return arr.join('');
}

module.exports = insertWhitespace;

/*
console.log(insertWhitespace("SheWalksToTheBeach")) // "She Walks To The Beach"

console.log(insertWhitespace("MarvinTalksTooMuch")) // "Marvin Talks Too Much"

console.log(insertWhitespace("TheGreatestUpsetInHistory")) // "The Greatest Upset In History"
*/
=======
function insertWhitespace() {
  // Your code
}

module.exports = insertWhitespace;
>>>>>>> 1a7b2e1d9605b833a4fe7ae5c830b7ffd4e05df6
