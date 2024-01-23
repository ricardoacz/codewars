// 7 kyu
// Substring fun

function nthChar(words){
 let result = []
 for (let i = 0; i < words.length; i++) {
   result.push(words[i][i])
 }
  return result.join("")
}
