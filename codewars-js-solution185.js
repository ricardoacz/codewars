// 7 kyu
// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0
  let vowelsUTF_16 = [97, 101, 105, 111, 117]
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowelsUTF_16.length; j++) {
      if (str.charCodeAt(i) === vowelsUTF_16[j]) {
        count++
      }
    }
  }
  
  return count
}
