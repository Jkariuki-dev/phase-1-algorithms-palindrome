
  // Write your algorithm here
  function isPalindrome(word) {
    let start = 0;
    let end = lowercaseWord.length - 1;
  
    while (start <= end) {
      if (lowercaseWord[start] !== lowercaseWord[end]) {
        return false;
      }
      start++;
      end--;
    }
  
    return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

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
