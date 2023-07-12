// No zeros for heros
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  let number = String(n)
  
  number = number.split("")
  
  let newNumber = number
  
  for (let i = number.length -1; i >= 0; i--) {
    if (number[i] === "0") {
      newNumber.splice(i,1)
    } else if (number !== "0"){
      break
    }
  }
  
  newNumber = newNumber.join("")
  
  return Number(newNumber)
}
