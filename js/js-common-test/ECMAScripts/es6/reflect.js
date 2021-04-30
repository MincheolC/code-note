const crypto = () => {
  const SALT = 123;
  return {
    get: (target, key) => {
      const salted = {}
      for (const [key, value] of Object.entries(target)) {
        salted[key] = value + SALT;
      }
      return Reflect.get(salted, key);
    }
  }
}


const obj = {
  a: 1,
}
const p = new Proxy(obj, crypto());

console.log(p.a);
console.log(Reflect.isExtensible(obj));
console.log(Reflect.preventExtensions(obj));
console.log(Reflect.isExtensible(obj));
obj.b = 2;
console.log(obj);