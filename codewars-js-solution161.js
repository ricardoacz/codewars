// 7 kyu
// Highest and Lowest

function highAndLow(numbers){
  let array = numbers.split(" ").map((element) => {
    return parseInt(element)
  })
  array.sort((a,b) => (b - a))
  let twoDigits = [array[0], array[array.length - 1]]
  return twoDigits.join(" ")
}
