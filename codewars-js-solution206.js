// 7 kyu
// Disemvowel Trolls

function disemvowel(str) {
  let codes = []
  
  function getCode(array) {
    for (let i = 0; i < array.length; i++) {
      codes.push(array[i].charCodeAt())
    }
  }
  
  getCode(['a','e','i','o','u','A','E','I','O','U'])
  
  return str.split("").map((element, index) => {
    for (let i = 0; i < codes.length; i++) {
      if (element.charCodeAt() === codes[i]) {
        return ""
      }
    }
    return element
  }).join("")
}
