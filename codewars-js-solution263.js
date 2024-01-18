// 7 kyu
// How many are smaller than me?


function smaller(nums) {
  return nums.map((element, index) => {
    let subarray = nums.slice(index + 1)
    let filtered = subarray.filter(y => element > y)
    return filtered.length
  })
}
