// 8 kyu
// A wolf in sheep's clothing

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return "Pls go away and stop eating my sheep"
  }
  
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === 'wolf' && queue[i + 1] === 'sheep') {
      return `Oi! Sheep number ${queue.length - i - 1}! You are about to be eaten by a wolf!`
    }
  }
}
