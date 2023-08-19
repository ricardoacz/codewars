// 7 kyu
// Tail Swap
function tailSwap(arr) {
  const [a,b] = arr[0].split(":")
  const [c,d] = arr[1].split(":")
  
  return [`${a}:${d}`, `${c}:${b}`]
}
