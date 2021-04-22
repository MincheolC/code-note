const { recursion, recursionArrIndex, recursionArrIndexSumParam } = require('../');

test('recursion', () => {
  const n = 5;
  expect(recursion(n)).toBe(15)
})

test('recursionArrIndex', () => {
  const arr = [1,2,3,4,5];
  expect(recursionArrIndex(arr, 0)).toBe(15);
});

test('recursionArrIndexSumParam', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(recursionArrIndexSumParam(arr, 0, 0)).toBe(15);
});