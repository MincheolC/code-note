const _ = require('lodash');

let obj = {
  b: 2,
  a: {
    b: 3,
  },
};

// Shallow Copy
const o1 = { ...obj };
o1.b = 3;
o1.a.b = 2;
const o2 = Object.assign({}, obj);
o2.a.b = 1;
console.log(obj);
console.log(o1);
console.log(o2);

// Deep Copy
obj = {
  a: {
    b: 1,
  },
  c: 3,
};

// JSON 객체 사용.
let o3 = JSON.parse(JSON.stringify(obj));
o3.a.b = 2;
o3.c = 1;
// Object.assign()을 이용한 복사
let o4 = _.cloneDeep(obj);
o4.a.b = 3;

console.log(obj); // {a: { b: 1 }, c: 3}
console.log(o3); // {a: { b: 2 }, c: 1}
console.log(o4); // {a: { b: 3 }, c: 3}
