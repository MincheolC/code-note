function solution(inputArray) {
  const regExp = '^[a-zA-Z]+$';
  const filteredString = inputArray.filter(value => typeof value === 'string' && value.match(regExp));
  const obj = {};
  filteredString.forEach((value) => {
    obj[value] = null;
  });
  return Object.keys(obj).sort((a, b) => a.length - b.length || a.localeCompare(b));
}

module.exports = {
  solution,
};
