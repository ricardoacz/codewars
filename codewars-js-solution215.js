// 6 kyu
// Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  if (string === "") {
    return {}
  }
  
  let characters = string.split("")
  let objCharacters = []
  let obj = {}
  
  for (let i = 0; i < characters.length; i++) {
    if (objCharacters.indexOf(characters[i]) === -1) {
      objCharacters.push(characters[i])
    }
  }
  
  for (let i = 0; i < objCharacters.length; i++) {
    obj[objCharacters[i]] = 0
  }
  
  for (let i = 0; i < characters.length; i++) {
    if (objCharacters.indexOf(characters[i]) !== -1) {
      obj[characters[i]]++
    }
  }
  
  return obj
}
