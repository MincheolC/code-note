// WeakMap
const s = {};
const b = {};
const wm = new WeakMap();
wm.set(s, { extra: 42 });

console.log(wm.get(s), wm.get(b), wm.size); // { extra: 42 } undefined undefined

// WeakMap Usecase: Caching
let cache = new WeakMap();

function funcWhichReturnObj() {
  return {
    a: 1,
  }
}

function process(obj) {
  if (!cache.has(obj)) {
    cache.set(obj, obj);
    console.log('cached');
  }

  return cache.get(obj);
}

console.log('== WeakMap Usecase: Caching ==');
let obj = funcWhichReturnObj();
console.log(process(obj));
console.log(process(obj));
obj = null;


