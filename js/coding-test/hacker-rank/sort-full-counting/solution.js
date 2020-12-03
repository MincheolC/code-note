function countSort(arr) {
  const maxIndex = arr.reduce((max, [index]) => (max < index ? index : max), 0);
  const list = [];

  for (let i = 0; i <= maxIndex; i += 1) {
    list.push([]);
  }
  const len = arr.length;
  arr.forEach(([strI, value], index) => {
    const i = parseInt(strI, 10);
    if (index < len / 2) {
      return list[i].push('-');
    }
    return list[i].push(value);
  });

  return list.filter(n => n.length > 0).reduce(
    (str, n, index) => (index > 0 ? `${str} ${n.join(' ')}` : `${str}${n.join(' ')}`),
    '',
  );
}

const arr = [
  ['0', 'ab'],
  ['6', 'cd'],
  ['0', 'ef'],
  ['6', 'gh'],
  ['4', 'ij'],
  ['0', 'ab'],
  ['6', 'cd'],
  ['0', 'ef'],
  ['6', 'gh'],
  ['0', 'ij'],
  ['4', 'that'],
  ['3', 'be'],
  ['0', 'to'],
  ['1', 'be'],
  ['5', 'question'],
  ['1', 'or'],
  ['2', 'not'],
  ['4', 'is'],
  ['2', 'to'],
  ['4', 'the'],
];
const arr2 = [
  ['1', 'e'],
  ['2', 'a'],
  ['1', 'b'],
  ['3', 'a'],
  ['4', 'f'],
  ['1', 'f'],
  ['2', 'a'],
  ['1', 'e'],
  ['1', 'b'],
  ['1', 'c'],
];
console.log(countSort(arr));
console.log(countSort(arr2));
