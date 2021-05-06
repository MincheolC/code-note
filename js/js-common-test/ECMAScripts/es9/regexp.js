// Numbered Capture Group
let RE_DATE = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

let matchObj = RE_DATE.exec('1999-12-31');
let year = matchObj[1]; // 1999
let month = matchObj[2]; // 12
let day = matchObj[3]; // 31

console.log(matchObj);

// Named Capture Group
RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
matchObj = RE_DATE.exec('1999-12-31');
({groups: { year, month, day }} = RE_DATE.exec('2020-12-31'));

console.log(matchObj, year, month, day)

// Back References
let RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
console.log(RE_TWICE.test('abc!abc')); // true
console.log(RE_TWICE.test('abc!ab')); // false

RE_TWICE = /^(?<word>[a-z]+)!(?<number>[0-9]+)\?\1\2$/;
console.log(RE_TWICE.test('abc!123?abc123')); // true
console.log(RE_TWICE.test('abc!123?abc12')); // false
console.log(RE_TWICE.test('abc!ab')); // false

// Replace
console.log('2020-01-02'.replace(RE_DATE, '$<month>/$<day>/$<year>'));

// Emoji (astral planes)
console.log('😀', '😀'.length, '😀'.charCodeAt(0).toString(16), '😀'.charCodeAt(1).toString(16));


