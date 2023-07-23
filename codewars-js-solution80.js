// Remove duplicates from list
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  let newArray = []
  for (let i = 0; i < a.length; i++) {
    if (newArray.indexOf(a[i]) === -1) {
      newArray.push(a[i])
    }
  }
  return newArray
}
