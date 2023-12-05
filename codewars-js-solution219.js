// 6 kyu
// Count characters in your string

function count(string) {
  let obj = {}
  for (let i = 0; i < string.length; i++) {
    obj[string[i]] ? obj[string[i]]++ : obj[string[i]] = 1
  }
  
  return obj
}
