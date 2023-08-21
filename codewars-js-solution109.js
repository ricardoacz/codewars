// 8 kyu
// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
function doubleChar(str) {
  let repeatedStr = []
  let word = str.split("")
  
  word.forEach((element, index) => {
    repeatedStr.push(element)
    repeatedStr.push(element)
  })
  
  return repeatedStr.join("")
}
