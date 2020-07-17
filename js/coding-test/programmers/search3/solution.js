function isValidNumber(n) {
  const a = n[0];
  const b = n[1];
  const c = n[2];
  return (a !== '0' && b !== '0' && c !== '0'&& a !== b && a !== c && b !== c);
}

function getStrikeNumber(a, b) {
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    if (a[i] === b[i]) count += 1;
  }
  return count;
}

function getBallNumber(a, b) {
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const index = b.indexOf(a[i]);
    if (index > -1 && index !== i) count += 1;
  }
  return count;
}

function solution(baseball) {
  let count = 0;
  for (let i = 111; i <= 999; i += 1) {
    if (isValidNumber(i.toString())) {
      let isAnswer = true;
      for (let j = 0; j < baseball.length; j += 1) {
        const [value, strike, ball] = baseball[j];
        const aStrike = getStrikeNumber(i.toString(), value.toString());
        const aBall = getBallNumber(i.toString(), value.toString());
        if (aStrike !== strike || aBall !== ball) {
          isAnswer = false;
          break;
        }
      }
      if (isAnswer) count += 1;
    }
  }
  return count;
}
