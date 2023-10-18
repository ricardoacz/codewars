// 7 kyu
// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  // Declare variable to hold middle index
  let middleIndex
  // Check for even length
  if (s.length % 2 === 0) {
    // We divide by 2 and rest 1, because elements of a string start from 0
    middleIndex = s.length / 2 - 1
    // We use the substring method to take two elements from the string
    return s.substring(middleIndex, middleIndex + 2)
    // Check for odd length
  } else if (s.length % 2 !== 0) {
    // We divide and round down
    middleIndex = Math.floor(s.length / 2)
    // We use the substring method to a single element from the string
    return s.substring(middleIndex, middleIndex + 1)
  }
}
