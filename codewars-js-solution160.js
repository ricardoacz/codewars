// 7 kyu
// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  // Turning string into an array and removing spaces between numbers
  let array = numbers.split(" ")
  // Converting strings to numbers and adding each element to new array
  let numberArray = array.map((element) => parseInt(element))
  // Ordering array from highest to lowest
  numberArray.sort((a,b) => (b - a))
  // Creating new array with highest and lowest value
  const result = [numberArray[0], numberArray[numberArray.length - 1]]
  // Array becomes a single string with 2 numbers and one space in between
  return result.join(" ")
}
