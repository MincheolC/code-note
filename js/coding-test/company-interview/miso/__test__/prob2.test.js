const { add, parseToNumber, toNumber } = require('../prob2');

test('toNumber', () => {
  const inputs = [
    ['오백삼', 503],
    ['육십사', 64],
    ['칠천일', 7001],
    ['구십', 90],
    ['십', 10],
    ['일', 1],
    ['천', 1000],
    ['만', 10000],
    ['억', 100000000],
  ];
  inputs.forEach(([input, output]) => {
    expect(toNumber(input)).toEqual(output);
  });
});

test('parseToNumber', () => {
  const inputs = [
    ['오백삼십조칠천팔백구십만천오백삼십구', 530000078901539],
    ['육십사억삼천십팔만칠천육백구', 6430187609],
    ['구백육십조칠천억팔천백삼십이만칠천일', 960700081327001],
    ['이천구백육십조천오백칠십만삼천구백구십', 2960000015703990],
    ['사십오억삼천육십만오백구십', 4530600590],
    ['천백십일', 1111],
    ['오억사천', 500004000],
    ['만오천사백삼십', 15430],
    ['일조', 1000000000000],
    ['일억', 100000000],
  ];
  inputs.forEach(([input, output]) => {
    expect(parseToNumber(input)).toBe(output);
  });
});

test('add', () => {
  const inputs = [
    ['오백삼십조칠천팔백구십만천오백삼십구', '삼조사천이만삼천구'],
    ['육십사억삼천십팔만칠천육백구', '사십삼'],
    ['구백육십조칠천억팔천백삼십이만칠천일', '사십삼조오천이백억육천구백십만일'],
    ['이천구백육십조천오백칠십만삼천구백구십', '삼천사백오십조일억이천만육백사십삼'],
    ['사십오억삼천육십만오백구십', '칠십억천이백삼십오만칠천구십이'],
    ['천백십일', '구천오백구십구'],
    ['오억사천', '백십일'],
    ['만오천사백삼십', '십구만삼천오백'],
    ['일조', '삼'],
    ['일억', '만'],
  ];
  const outputs = [
    '오백삼십삼조일억일천팔백구십이만사천오백사십팔',
    '육십사억삼천일십팔만칠천육백오십이',
    '일천사조이천이백일억오천사십이만칠천이',
    '육천사백일십조일억삼천오백칠십만사천육백삼십삼',
    '일백일십오억사천이백구십오만칠천육백팔십이',
    '일만칠백일십',
    '오억사천일백일십일',
    '이십만팔천구백삼십',
    '일조삼',
    '일억일만',
  ];
  inputs.forEach(([a, b], i) => {
    expect(add(a, b)).toEqual(outputs[i]);
  });
});
