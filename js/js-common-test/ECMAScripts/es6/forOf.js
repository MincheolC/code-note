// Generator
function* fibonacci() {
  // 생성기 함수
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // 1000에서 수열을 자름
  if (n >= 100) {
    break;
  }
}

// Iterable 객체 생성
let iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (var value of iterable) {
  console.log(value);
}

// String
iterable = 'boo';
for (let value of iterable) {
  console.log(value);
}

// Array
iterable = [10, 20, 30];
for (let value of iterable) {
  console.log(value);
}

// TypedArray
iterable = new Uint8Array([0x00, 0xff]);
for (let value of iterable) {
  console.log(value);
}

// Map
iterable = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
for (let value of iterable) {
  console.log(value);
}

// Set
iterable = new Set([1, 1, 2, 2, 3, 3]);
for (let value of iterable) {
  console.log(value);
}
