function* gen() {
  yield 1;
  yield 2;
  return 4;
  yield 3;
}

const g = gen();

console.log('-- basic --')
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.return(5));

console.log('\n-- increment --')
function* increment() {
  console.log('[ENTERED]');
  let i = 0;

  try {
    while (true) {
      yield i++;
    }
  } catch (e) {
    console.log('[ERROR]', e);
  }
}

const incG = increment()
console.log(incG.next());
console.log(incG.next());
console.log(incG.throw(-1));

console.log('\n-- iterableYield --')
function* iterableYield() {
  const a = 1;
  yield a;
  yield* [2, 3, 4];
}

const iterG = iterableYield();
console.log(iterG.next());
console.log(iterG.next());
console.log(iterG.next());
console.log(iterG.next());
console.log(iterG.next());

console.log('\n-- for of / ... --')
const iterG2 = iterableYield();
console.log([...iterG2])

const iterG3 = iterableYield();
for (let i of iterG3) {
  console.log(i);
}