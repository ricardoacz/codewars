// 7 kyu
// Consecutive letters

function solve(s){
  if (s.length === 1) {
    return true
  }
  s = s.split("").sort().join("")
  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) !== 1) {
      return false
    }
  }
  
  return true
  
}
