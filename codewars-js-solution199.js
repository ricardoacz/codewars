// 8 kyu
// Color Ghost
// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

var Ghost = function() {
  let colors = ['white', 'yellow', 'purple', 'red']
  this.color = colors[Math.floor(Math.random() * 4)]
};
