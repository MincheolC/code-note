const sum = (a) => {
  const a1 = a + 2;
  console.log(a1);
  return (b) => {
    const b1 = b + 3;
    console.log(b1);
    return (c) => {
      return a1 + b1 + c
    }
  }
}

console.log(sum(1)(2)(3))
const a12 = sum(1)(2);
console.log(a12(4), a12(6), a12(10));