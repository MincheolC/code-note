// 한 번만 사용한 첫 문자 찾기
function solution(s) {
  const index = {};
  const counts = {};
  let answer = -1;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    const currentCharCount = counts[char] || 0;

    counts[char] = currentCharCount + 1;
    index[char] = i + 1;
  }

  for (const [key, value] of Object.entries(counts)) {
    if (value === 1) {
      answer = index[key];
      break;
    }
    console.log(key, value);
  }
  return answer;
}

console.log(solution('statistics'));
console.log(solution('hackthegame'));
console.log(solution('falafal'));
