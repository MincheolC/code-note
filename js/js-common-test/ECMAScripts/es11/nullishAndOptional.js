// Optional Chaining
const obj = {
  body: {
    b: 2,
  }
};

const b = `${obj?.body?.b}`;
const c = `${obj?.body?.c ?? null}`;
const str3 = `{
  inner: ${obj.body ? `"${obj.body.b}"` : null}
}`;

console.log(b);
console.log(c);
console.log(str3);

// Nullish
const zero = 0;
let a = {
  1: zero ?? 1,
  2: obj.body?.c ?? 2,
}

console.log(a);