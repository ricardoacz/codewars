// 8 kyu
// Classy Classes
class Person {
  constructor(name, age) {
    this.name = name
    this.age = Number(age)
    this.info = `${this.name}s age is ${this.age}`
  }
  
  getInfo () {
    return this.info
  }
}
