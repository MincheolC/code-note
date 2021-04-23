const numberInKorean = {
  1: '일',
  2: '이',
  3: '삼',
  4: '사',
  5: '오',
  6: '육',
  7: '칠',
  8: '팔',
  9: '구',
};

const koreanToNumber = {
  일: 1,
  이: 2,
  삼: 3,
  사: 4,
  오: 5,
  육: 6,
  칠: 7,
  팔: 8,
  구: 9,
};

const unitToNumber = {
  경: 1e16,
  조: 1e12,
  억: 1e8,
  만: 1e4,
  천: 1000,
  백: 100,
  십: 10,
};

function getIncludedUnits(number) {
  const units = [];

  ['경', '조', '억', '만'].forEach((unit) => {
    if (number.includes(unit)) units.push(unitToNumber[unit]);
  });
  return units;
}

function toNumber(koreanNumber) {
  const strArr = Array.from(koreanNumber);
  let num = 0;
  let val;
  for (let i = 0; i < strArr.length; i += 1) {
    if (!koreanToNumber[strArr[i]]) {
      const unit = unitToNumber[strArr[i]];
      num += (val ? val * unit : unit);
      val = null;
    } else {
      val = koreanToNumber[strArr[i]];
    }
  }
  return val && val !== 0 ? num + val : num;
}

function parseToNumber(koreanNumber) {
  const unitSeperator = /[경,조,억,만]+/;
  const includedUnits = getIncludedUnits(koreanNumber);
  const numbers = koreanNumber.split(unitSeperator).map(e => toNumber(e));
  let number = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    const unit = includedUnits[i];
    let num = numbers[i];
    if (unit && num !== null) {
      if (num === 0) {
        num = 1;
      }
      number += num * unit;
    } else if (num) {
      number += num;
    }
  }
  return number;
}

function toKoreanNumber(number) {
  const thousand = Math.floor(number / 1000);
  const hundred = Math.floor((number % 1000) / 100);
  const ten = Math.floor((number % 100) / 10);
  const rest = (number % 10);

  // const thousandStr = thousand && (thousand === 1 ? '천' : `${numberInKorean[thousand]}천`);
  // const hundredStr = hundred && (hundred === 1 ? '백' : `${numberInKorean[hundred]}백`);
  // const tenStr = ten && (ten === 1 ? '십' : `${numberInKorean[ten]}십`);
  // const restStr = rest && `${numberInKorean[rest]}`;

  const thousandStr = thousand && `${numberInKorean[thousand]}천`;
  const hundredStr = hundred && `${numberInKorean[hundred]}백`;
  const tenStr = ten && `${numberInKorean[ten]}십`;
  const restStr = rest && `${numberInKorean[rest]}`;

  return `${thousandStr || ''}${hundredStr || ''}${tenStr || ''}${restStr || ''}`;
}

function convertToKoreanNumber(number) {
  const K = 16;
  const J = 12;
  const U = 8;
  const M = 4;
  const arr = [];

  const w = number % (10 ** M);
  const m = Math.floor((number % (10 ** U)) / (10 ** M));
  const u = Math.floor((number % (10 ** J)) / (10 ** U));
  const j = Math.floor((number % (10 ** K)) / (10 ** J));
  const k = Math.floor(number / (10 ** K));

  arr.push(k);
  arr.push(j);
  arr.push(u);
  arr.push(m);
  arr.push(w);

  const koreanUnits = '경조억만';
  return arr.reduce((str, val, i) => `${str}${toKoreanNumber(val)}${val ? (koreanUnits[i] || '') : ''}`, '');
}


function add(a, b) {
  const numA = parseToNumber(a);
  const numB = parseToNumber(b);

  return convertToKoreanNumber(numA + numB);
}

const inputs = process.argv.slice(2);
console.log(add(inputs[0], inputs[1]));

module.exports = {
  add,
  parseToNumber,
  toNumber,
};
