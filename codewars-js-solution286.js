// 7 kyu
// Odd Ones Out!

function oddOnesOut(nums) {
  let results = {}
  
  nums.forEach((element) => {
    if (results[element]) {
      results[element]++
    } else {
      results[element] = 1
    }
  })
  return nums.filter((num) => results[num] % 2 === 0)
}
