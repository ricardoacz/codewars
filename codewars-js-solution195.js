// 7 kyu
// Get the Middle Character

function getMiddle(s)
{ 
  let mid = Math.floor(s.length / 2)
  if (s.length % 2 !== 0) {
    return s.substring(mid, mid + 1)
  } else {
    let characters = ""
    characters =  s.substring(mid -1, mid + 1)
    return characters
  }
}
