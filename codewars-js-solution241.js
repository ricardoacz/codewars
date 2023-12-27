// 7 kyu
// Sort array by string length

function sortByLength (array) {
  return array.sort((a,b) => {
    return a.length - b.length
  })
}
