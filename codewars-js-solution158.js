// 7 kyu
// Consecutive letters
// n this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True
// All inputs will be lowercase letters.

// More examples in test cases. Good luck!

function solve(s) {

  //Check if there's only one character, which returns true
  if (s.length === 1) {
    return true
  }
  
  //Convert string into array, sort the letters alphabetically, join into string
  let sortedSequence = s.split("").sort().join("")
  
  //Loop and check if character and previous character are difference by 1
  //For example, if before "b" there's an "a" in a "abc" string
  for (let i = 1; i < sortedSequence.length; i++) {
    if (sortedSequence.charCodeAt(i) - sortedSequence.charCodeAt(i-1) !== 1) {
      return false
    }
  }
  
  return true
}
