// 7 kyu
// Odd Ones Out!

function oddOnesOut(nums) {
  const result = {}
  nums.forEach((element) => {
    if (result[element]) {
      result[element]++
    } else {
      result[element] = 1
    }
  })
  return nums.filter((element) => {
    return result[element] % 2 === 0
  })
}
