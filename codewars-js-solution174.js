// 7 kyu
// Is my function new ?
//   Write a function that returns whether it was called with the new operator.

// The function must return a Boolean, but due to the way new works, valueOf() will be called on your returned value before strict comparison to true/false.

// Examples:

// wasCalledWithNew().valueOf();        // false
// (new wasCalledWithNew).valueOf();    // true
// wasCalledWithNew.call({}).valueOf(); // false

function wasCalledWithNew() {
    return Boolean()
}

wasCalledWithNew.prototype.valueOf = function () {
  return true
}
