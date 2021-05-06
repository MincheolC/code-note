// Object copy
const origin = {
  c: 1,
}
const a = {};
Object.assign(a, origin);
const a1 = { ...origin };

console.log(a, a1);
a.c = 2;
a1.c = 3;

console.log(origin,a,a1);
