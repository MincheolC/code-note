const { pipe } = require('./composition');

const sum = (a) => {
  const a1 = a + 2;
  return (b) => {
    const b1 = b + 3;
    return (c) => {
      return a1 + b1 + c
    }
  }
}

console.log(sum(1)(2)(3))
const a12 = sum(1)(2);
console.log(a12(4), a12(6), a12(10));

// Key를 지워보자
const person = {
  name: 'nakta',
  age: 10,
  work: 'developer'
}

const delKey = (deleteKey, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      if (key !== deleteKey) acc[key] = obj[key];
      return acc;
    },
    {}
  )
}

const renameKey = (from, to, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      if (from === key) acc[to] = obj[key];
      else acc[key] = obj[key];
      return acc;
    },
    {}
  );
};

console.log('basic: ',
pipe(
  person => delKey('age', person),
  person => renameKey('work', 'job', person),
)(person))

// 익명함수 없이 호출하기 위해 커링으로 변환해보자.
const cDelKey = (deleteKey) => (obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      if (key !== deleteKey) acc[key] = obj[key];
      return acc;
    },
    {}
  )
}

const cRenameKey = (from) => (to) => (obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      if (from === key) acc[to] = obj[key];
      else acc[key] = obj[key];
      return acc;
    },
    {}
  );
};

console.log('self curry: ',
pipe(
  cDelKey('age'),
  cRenameKey('work')('job'),
)(person));


const curry = (fn) => {
  const arity = fn.length; // 인수
  return function _curry(...args) {
    if (args.length < arity) return _curry.bind(null, ...args);
    return fn.call(null, ...args);
  }
}

const curriedDelKey = curry(delKey);
const curriedRenameKey = curry(renameKey);

console.log('curry fnc: ',
pipe(
  curriedDelKey('age'),
  curriedRenameKey('work')('job'),
)(person));