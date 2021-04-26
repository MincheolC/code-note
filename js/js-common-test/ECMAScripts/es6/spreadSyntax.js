function spread(x, y, z, r, x1, y1, z1) {
  return (x + y + z) + (x1 + y1 + z1) - r;
}

const point1 = [1, 2, 3]
const point2 = [1, 2, 3]

// Spread combination
console.log(spread(...point1, 1, ...point2))


class Spread {
  #b;
  constructor(a, b, c) {
    this.a = a;
    this.#b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.#b + this.c;
  }
}

// Spread new keyword
const s = new Spread(...point1);
console.log(s.sum(), s.a, s.c, s.b);

// Object spread
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => ({ ...objects });

console.log('>> merge object: ', { ...obj1, ...obj2 });
console.log('>> merge object (Object.assign): ', Object.assign(obj1, obj2));
console.log('>> merge object (wrong): ', merge(obj1, obj2));