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

// Fibonacci
const fibonacci = {
  [Symbol.iterator]: function* () {
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