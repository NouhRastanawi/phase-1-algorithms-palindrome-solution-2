function isPalindrome(word) {
  let len = Math.floor(word.length / 2);  // Floor for the half the word length.
  for (let i = 0; i < len; i++)           // looping through the first half the word.
    if (word[i] !== word[word.length - i - 1]) return false; 
     // when a letter with its corresponding letter from the other half doesn't match, return false (not Palindrome).
  return true;                            //  otherwise the word is palindrome (true).
}

console.log("check: ", isPalindrome("roor"));


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
