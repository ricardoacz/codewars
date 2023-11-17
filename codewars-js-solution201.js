// 7 kyu
// Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let codes = [97, 101, 105, 111, 117, 65, 69, 73, 79, 85]
  
  return str.split("").map((element, index) => {
    for (let i = 0; i < codes.length; i++) {
      if (element.charCodeAt() === codes[i]) {
        return ""
      }
    }
    return element
  }).join("")
}
