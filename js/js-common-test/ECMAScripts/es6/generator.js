// Basic E.g.
function* loop(arr) {
  let nextIndex = 0;
  while (nextIndex < arr.length) {
    yield arr[nextIndex++];
  }
}

const arr = [1,2,3];
for (let value of loop(arr)) {
    console.log(value);
}

// Fibonacci with Generator Iterable
const fibonacci = {
  *[Symbol.iterator] () {
    let pre = 0;
    let cur = 1;

    for (;;) {
      const temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  },
};

for (let n of fibonacci) {
  if (n > 50) break;
  console.log(n);
}

// Pass value to generator
function* gen() {
  try {
    let ask1 = yield '2 + 2 = ?';
    console.log(ask1); // 4
    let ask2 = yield '3 * 3 = ?';
    console.log(ask2); // 9
  } catch (e) {
    console.log(e)
  }
}

let generator = gen();
console.log(generator.next().value);
console.log(generator.next(4).value);
console.log(generator.next(9).value);
console.log(generator.next(9).done);

// throw error to generator
try {
  generator.throw(new Error('Error Occur'));
} catch (e) {
  console.log(e);
}
