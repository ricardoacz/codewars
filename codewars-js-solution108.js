// 8 kyu
// Remove duplicates from list
function distinct(a) {
  let result = []
  
  for (let i = 0; i < a.length; i++) {
    if (result.indexOf(a[i]) === -1) {
      result.push(a[i])
    }
  }
  
  return result
}
