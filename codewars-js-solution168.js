// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

function toDayOfYear(arr) {
  // Create a date object from the arr
  let day = new Date(arr[2], arr[1] - 1, arr[0])
  // Create a date object that is the beginning of the year
  let start = new Date(day.getFullYear(), 0, 0)
  // Get difference between date objects in millisceonds
  let diff = day - start
  // Get the amounts of milliseconds in a day
  let oneDay = 1000 * 60 * 60 * 24
  // Convert the difference from milliseconds to days
  let convertToDays = Math.floor(diff/oneDay)
  return convertToDays
  
  
}
