// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

  let theName = name.toUpperCase()
  
  theName = theName.split(" ")
  
  let firstName = theName[0]
  let lastName = theName[1]
  
  return `${firstName[0]}.${lastName[0]}`
}
