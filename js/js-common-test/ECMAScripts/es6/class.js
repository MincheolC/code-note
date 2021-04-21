console.log('\n== Class ==');
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

