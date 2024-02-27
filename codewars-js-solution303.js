// 7 kyu
// Trilingual democracy

// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
  
  const official = ['D', 'F', 'I', 'K']
  
  let languages = group.split("")
  
  const frequency = {}
  
  for (let language of languages) {
    frequency[language] = (frequency[language] || 0) + 1
  }
  
  if (frequency[languages[0]] === 3) {
    return languages[0]
  }
  
  if (frequency[languages[0]] === 2 || frequency[languages[1]] === 2) {
    for (let language of languages) {
      if (frequency[language] === 1) {
        return language
      }
    }
  }
  
  if (frequency[languages[0]] === 1 && frequency[languages[1]] === 1 && frequency[languages[2]] === 1) {
    for (let language of official) {
      if (!languages.includes(language)) {
        return language
      }
    }
  }
}
