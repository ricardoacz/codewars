// 8 kyu
// Color Ghost
// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function(color) {
  const random = Math.random()
  const option = Math.ceil(random * 4)
  let result
  
  if (option === 1) {
    result = 'white'
  } else if (option === 2) {
    result = 'yellow'
  } else if (option === 3) {
    result = 'purple'
  } else {
    result = 'red'
  }
  
  this.color = result
  
};
