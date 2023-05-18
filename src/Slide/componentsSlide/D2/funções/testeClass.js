class Person {
    constructor(first, last) {
      this.first = first;
      this.last = last;
    }
  
    get name() {
      return `${this.first} ${this.last}`;
    }
  
    // 👇️ Define setter
    set name(name) {
      this.first = name.split(' ')[0];
      this.last = name.split(' ')[1];
    }
  }
  
  const p1 = new Person('John', 'Smith');
  
  // ✅ Use setter
  p1.name = 'Bobby Hadz';
  
  console.log(p1.name,p1); // 👉️ "Bobby Hadz"
  
  class Condição {
    get c() {
        return this._c
    }
    set c(c) {
        this._c = c
    }
    constructor(c) {
        this._c = c
    }
}
var tCondição = new Condição(true)
console.log(tCondição,tCondição.c)
var análiseBooleana = (x,y) => {
    if (x===y) {
        console.log(true)
    } else {
        console.log(false)
    }
}
exports.tCondição = tCondição
tCondição = require("./testeClass2.js").tCondição2
console.log(tCondição,tCondição.c)
  







  
  
  