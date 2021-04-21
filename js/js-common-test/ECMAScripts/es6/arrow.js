let f1, f2;
f1 = ([a, b] = [10, 20]) => a + b;
f2 = ({ a, b } = { a: 10, b: 20 }) => a + b;
console.log('== Arrow ==');
console.log(
  '>> Destructuring & Defaut f1(), f2(), f1(1, 2), f(1, 2)):',
  f1(),
  f2(),
  f1([1, 2]),
  f2({ a: 1, b: 2 }),
);
f1 = (n) => {
  const f = (...args) => args[0] + n;
  return f(10);
};
console.log('>> No Own Arguments: ', f1(1));
