// Class Mixin
const calculatorMixin = (Base) =>
  class extends Base {
    calc(a, b) {
      return a + b;
    }
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize(n) {
      return n + 1;
    }
  };

class Foo {
  foo() {
    return 'foo';
  }
}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {
  bar() {
    return 'bar';
  }
}
const bar = new Bar();
console.log('>> Mix-in: ', bar.bar(), bar.foo(), bar.calc(1, 2), bar.randomize(4));

class Zoo {
  m;
  #n;
  static p;
  constructor(m, n, p) {
    this.m = m
    this.#n = n;
    Zoo.p = p
  }
}
const zoo = new Zoo(1, 2, 3);
console.log('>> public & static: ', zoo.m, Zoo.p)
console.log('>> private: ', zoo.n, zoo.p);