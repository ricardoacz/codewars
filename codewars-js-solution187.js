// 7 kyu
// Sorted Union
// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Courtesy of FreeCodeCamp, a great place to learn web-dev; plus, its founder Quincy Larson is pretty cool and amicable. I made the original one slightly more tricky ;)

function uniteUnique(...arr) {
  let finalArr = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (finalArr.indexOf(arr[i][j]) ===  -1) {
        finalArr.push(arr[i][j])
      }
    }
  }
  return finalArr
}
