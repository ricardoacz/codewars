// 6 kyu
// String array duplicates
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
  // Function to remove duplicates from a single string
  function removeDubString (str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i - 1]) {
        result = result + str[i]
      }
    }
    // Once the loop is done, return the result
    return result
  }
  
  // Applying the function using the map method
  return s.map(element => {
    return removeDubString(element)
  })
};
