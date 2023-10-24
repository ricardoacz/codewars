// 7 kyu
// Is my function new ?

function wasCalledWithNew() {
    return Boolean();
}

wasCalledWithNew.prototype.valueOf = function () {
  return true
}
