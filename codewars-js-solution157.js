// 8 kyu
// Array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let sum = [...arr1, ...arr2]
  return sum.reduce((acc, current) => acc + current, 0)
}
