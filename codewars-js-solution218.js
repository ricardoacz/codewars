// 6 kyu
// Count characters in your string

function count(string) {
  let obj = {}
  string.split("").forEach((element, index) => {
    obj[element] ? obj[element]++ : obj[element] = 1
  })
  
  return obj
}
