// 8 kyu
// Is the string uppercase?

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase() ? true : false
}
