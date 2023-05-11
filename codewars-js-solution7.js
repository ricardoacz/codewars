// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let sentence = str.split(" ")
  const invertedStr = []
  
  for (let i = 0; i < sentence.length; i++) {
    invertedStr.push(sentence[i].split("").reverse().join(""))
  }
  
  return invertedStr.join(" ")
}
