// 7 kyu
// Day of the Year
function toDayOfYear(arr) {
  let day = new Date(arr[2], arr[1] -1, arr[0])
  let start = new Date(day.getFullYear(), 0,0)
  let diff = day - start
  let dayInMilliseconds = 86400000
  let conversion = Math.floor(diff/dayInMilliseconds)
  return conversion
}
