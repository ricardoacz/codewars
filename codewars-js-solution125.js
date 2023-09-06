// 7 kyu
// Reversed Message
function reverseMessage(str) {
  let reverseSentence = str.toLowerCase().split(" ").reverse()
  
  let reverseWords = reverseSentence.map(word => {
    const wordToProcess = word.split("").reverse()
    
    if (wordToProcess[0] >= 'a' && wordToProcess[0] <= 'z') {
      wordToProcess[0] = wordToProcess[0].toUpperCase()
      return wordToProcess.join("")
    } else {
      return wordToProcess.join("")
    }
  })
  
  return reverseWords.join(" ")
}
