// 6 kyu
// String array duplicates

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
  function stringDup (str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i-1]) {
        result += str[i]
      }
    }
    return result
  }
  
  return s.map(stringDup)
  
};
