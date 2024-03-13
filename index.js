function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here
*/
// // const isPalindrom = (word) => {
// //   const reversedWord = word.split("").reverse().join("");
// //   return word === reversedWord;
// };
/*
  Add written explanation of your solution here
// I had to look up the terminology or syntax for a way to flip a word around. By breaking the string of word into seperate individual letter strings you can reverse the order of the string 
and then rejoin them. I realize this might cause issues with capital letters so thinking about that, I could have done something like const lowerCaseWord = word.toLowerCase() */

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
