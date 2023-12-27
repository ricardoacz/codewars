// 7 kyu
// Dinner Plans

function commonGround(s1, s2){
  s1 = s1.split(" ")
  s2 = s2.split(" ")
  let result = []
  let seen = new Set()
  
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i]) && !seen.has(s2[i])) {
      result.push(s2[i])
      seen.add(s2[i])
    }
  }
  
  if (result.length === 0) {
    return 'death'
  } else {
    return result.join(" ")
  }
}
