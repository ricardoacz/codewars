// 8 kyu
// Flick Switch
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

function flickSwitch(arr){
  let change = true
  let list = []
  arr.forEach((element, index) => {
    if (element === 'flick' && change === true) {
      change = false
    } else if (element === 'flick' && change === false) {
      change = true
    }
    change ? list.push(true) : list.push(false)
  })
  return list
}
