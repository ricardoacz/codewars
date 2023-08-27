// 8 kyu
// Remove duplicates from list
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
  let result = []
  
  for (let i = 0; i < a.length; i++) {
    if (result.indexOf(a[i]) === -1) {
      result.push(a[i])
    }
  }
  
  return result
}
