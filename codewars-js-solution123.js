// 7 kyu
// Reversed Message
// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
  let words = str.toLowerCase().split(" ").reverse()
  
  const wordsReverse = words.map(word => {
    const wordReverse = word.split("").reverse()
    if (wordReverse[0] >= 'a' && wordReverse[0] <='z') {
      wordReverse[0] = wordReverse[0].toUpperCase()
      return wordReverse.join("")
    } else {
      return wordReverse.join("")
    }
  })
  
  return wordsReverse.join(" ")
}
