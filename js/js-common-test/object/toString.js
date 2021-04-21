// literal object
const a = {
  name: 'a',
  toString: function () {
    return `this is a ${JSON.stringify(this.name)}`
  }
}

// class
class B {
  constructor() {
    this.name = 'B'
  }

  toString() {
    return `this is A ${JSON.stringify(this.name)}`
  }
}

// prototype
const C = function () {
  this.name = 'c';
}
C.prototype.toString = function () {
  return `this is C ${JSON.stringify(this.name)}`
}

const c = new C();
const b = new B();

console.log(a);
console.log(a + '');
console.log(b)
console.log(b + '')
console.log(c)
console.log(c + '')


