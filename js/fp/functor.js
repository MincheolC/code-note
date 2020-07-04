const f = a => a + 1;
const g = b => b * 2;

// js의 array는 functor 객체
const functor = [1, 2, 3];
const newFunctor = functor.map(g).map(f);
const newFunctor2 = functor.map(x => f(g(x)));

// [3, 5, 7]  [3, 5, 7]
console.log(newFunctor, newFunctor2);
