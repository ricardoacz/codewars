// 8 kyu
// Did she say hallo?

function validateHello(greetings) {
  let lang = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish'
  }
  
  greetings = greetings.toLowerCase()
  
  let keys = Object.keys(lang)
  
  for (let word of keys) {
    if (greetings.includes(word)) {
      return true
    }
  }
  return false
}
