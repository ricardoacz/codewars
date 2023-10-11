// 7 kyu
// Consecutive letters

function solve(s){
  if (s.length === 1) {
    return true
  }
  
  let order = s.split("").sort().join("")
  
  for (let i = 1; i < order.length; i++) {
    if (order.charCodeAt(i) - order.charCodeAt(i - 1) !== 1) {
      return false
    } 
  }
  
  return true
}
