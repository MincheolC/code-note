function padding(a, length) {
  const onePlace = a % 10;
  const aLen = a.toString().length;
  let newA = a.toString();
  for (let i = 0; i < length - aLen; i += 1) {
    newA += onePlace;
  }
  return parseInt(newA, 10);
}

function sorting(a, b) {
  const aLen = a.toString().length;
  const bLen = b.toString().length;

  if (aLen === bLen) return b - a;
  if (aLen > bLen) {
    const tempB = padding(b, aLen);
    if (tempB === a) return true;
    return tempB - a;
  }
  const tempA = padding(a, bLen);
  if (tempA === b) return true;
  return b - tempA;
}

function solution(numbers) {
  return numbers.sort(sorting).reduce((answer, value) => answer + value, "");
}

function solution2(numbers) {
  const answer = numbers
    .map((c) => c.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer.startsWith("0") ? "0" : answer;
}
