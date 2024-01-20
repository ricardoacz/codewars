// 7 kyu
// All or Nothing

function possiblyPerfect(key,answers) {
  let result = 0
  let emptyQuestion = 0
  
  for (let i = 0; i < key.length; i++) {
    if (key[i] === answers[i]) {
      result++
    } else if (key[i] === '_') {
      emptyQuestion++
    }
  }
  
  return result + emptyQuestion === key.length || result === 0 ? true : false
}
