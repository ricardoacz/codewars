// 7 kyu
// Likes Vs Dislikes

function likeOrDislike(buttons) {
  let result = 'Nothing'
  
  for (let i = 0; i < buttons.length; i++){
    if (result === buttons[i]) {
      result = 'Nothing'
    } else {
      result = buttons[i]
    }
  }
  
  return result
}
