const plus = (a, b) => a + b;
const multiply = (a, b) => a * b;
const minus = (a, b) => a - b;
const divide = (a, b) => parseInt(a / b, 10);
const reverseMinus = (a, b) => minus(b, a);
const reverseDivide = (a, b) => divide(b, a);
const attach = (n, i) => parseInt(n.toString().padEnd(i, n), 10);

const availables = {};

function calculate(setA, setB, i) {
  const set = [];
  setA.forEach((a) => {
    setB.forEach((b) => {
      const plusN = plus(a, b);
      const multiplyN = multiply(a, b);
      const minusN = minus(a, b);
      const divideN = divide(a, b);
      const reverseMinusN = reverseMinus(a, b);
      const reverseDivideN = reverseDivide(a, b);

      if (plusN <= 32000 && !availables[plusN]) {
        set.push(plusN);
        availables[plusN] = i + 1;
      }
      if (multiplyN <= 32000 && !availables[multiplyN]) {
        set.push(multiplyN);
        availables[multiplyN] = i + 1;
      }
      if (minusN <= 32000 && !availables[minusN]) {
        set.push(minusN);
        availables[minusN] = i + 1;
      }
      if (divideN <= 32000 && !availables[divideN]) {
        set.push(divideN);
        availables[divideN] = i + 1;
      }
      if (reverseMinusN <= 32000 && !availables[reverseMinusN]) {
        set.push(reverseMinusN);
        availables[reverseMinusN] = i + 1;
      }
      if (reverseDivideN <= 32000 && !availables[reverseDivideN]) {
        set.push(reverseDivideN);
        availables[reverseDivideN] = i + 1;
      }
    });
  });
  return set;
}

function createSet(sets, n, k) {
  let set = [];
  for (let i = 0; i < (k / 2); i += 1) {
    set = set.concat(calculate(sets[i], sets[k - i - 1], k));
  }
  const attachedN = attach(n, k + 1);
  set.push(attachedN);
  availables[attachedN] = k + 1;
  return sets.push(set);
}

function solution(N, number) {
  const sets = [[N]];
  availables[N] = 1;
  for (let i = 1; i <= 8; i += 1) {
    createSet(sets, N, i);
  }
  return availables[number] <= 8 ? availables[number] : -1;
}

console.log(solution(2, 122));
console.log(solution(5, 12));
