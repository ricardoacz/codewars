// 8 kyu
// Removing Elements
function removeEveryOther(arr){
  return arr.filter((element, index) => 
    index % 2 === 0
  )
}
