// 7 kyu
// Jaden Casing Strings

String.prototype.toJadenCase = function () {
  let sentenceArray = this.split(" ")
  
  let newSentenceArray = sentenceArray.map((element, index) => (
  element.charAt(0).toUpperCase() + element.slice(1)))
  
  return newSentenceArray.join(" ")
};
