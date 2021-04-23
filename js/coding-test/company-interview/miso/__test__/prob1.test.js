const { addArr } = require('../prob1');

test('addAddr', () => {
  const inputs = [
    ['123', '009', '132'],
    ['1', '1', '2'],
    ['0', '0', '0'],
    ['9', '9', '18'],
    ['999', '001', '1000'],
  ];
  inputs.forEach(([a, b, sum]) => {
    const inputA = Array.from(a).reverse();
    const inputB = Array.from(b).reverse();
    const results = Array.from(sum);

    expect(addArr(inputA, inputB)).toEqual(results);
  });
});
