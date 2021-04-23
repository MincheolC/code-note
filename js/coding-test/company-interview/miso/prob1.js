function buildLookUpTable() {
  return Array(10).fill(0)
    .map(() => Array(10).fill(0))
    .map((row, i) => row.map((_, j) => ({
      value: `${(i + j) % 10}`,
      carryBit: `${Math.floor((i + j) / 10)}`,
    })));
}

function flattenLookUpTable(table) {
  return table.reduce((obj, row, i) => {
    const rowObj = row.reduce((rObj, col, j) => ({
      ...rObj,
      [`${i}${j}`]: col,
    }), {});

    return {
      ...obj,
      ...rowObj,
    };
  }, {});
}

const lookUpObj = flattenLookUpTable(buildLookUpTable());

function addArr(arrA, arrB) {
  const sum = [];
  let carry = '0';
  for (let i = 0; i < arrA.length; i += 1) {
    const { value, carryBit } = lookUpObj[`${arrA[i]}${arrB[i]}`];
    if (carry === '1') {
      const extra = lookUpObj[`${value}${carry}`];
      sum.push(extra.value);
      carry = carryBit === '1' || extra.carryBit === '1' ? '1' : '0';
    } else {
      sum.push(value);
      carry = carryBit;
    }
  }
  if (carry === '1') sum.push(carry);
  return sum.reverse();
}

function add(a, b) {
  const arrA = Array.from(a).reverse();
  const arrB = Array.from(b).reverse();
  const lenA = arrA.length;
  const lenB = arrB.length;

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i += 1) {
      arrB.push('0');
    }
  } else if (lenA < lenB) {
    for (let i = 0; i < lenB - lenA; i += 1) {
      arrA.push('0');
    }
  }
  return addArr(arrA, arrB).join('');
}

function inputValidation(inputs) {
  const isPositiveInteger = input => /^\d*$/.test(input);
  if (inputs.length < 2) {
    throw new Error('Need two input values');
  } else if (!isPositiveInteger(inputs[0]) || !isPositiveInteger(inputs[1])) {
    throw new Error('Need positive numbers');
  }
}

try {
  const inputs = process.argv.slice(2);
  inputValidation(inputs);
  const sum = add(inputs[0], inputs[1]);
  console.log(sum);
} catch (e) {
  console.error(e);
}

module.exports = {
  addArr,
};
