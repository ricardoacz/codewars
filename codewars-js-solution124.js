// 7 kyu
// Reversed Message
// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

function reverseMessage(str) {
  let reverseMessage = str.toLowerCase().split(" ").reverse()
  
  let reverseDetail = reverseMessage.map(word => {
    const reverseWord = word.split("").reverse()
    if (reverseWord[0] >= 'a' && reverseWord[0] <= 'z') {
      reverseWord[0] = reverseWord[0].toUpperCase()
      return reverseWord.join("")
    } else {
      return reverseWord.join("")
    }
  })
  return reverseDetail.join(" ")
}
