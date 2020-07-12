function solution(array, commands) {
  const answer = [];
  commands.forEach(([i, j, k]) => {
    const arr = array.slice(i - 1, j);
    arr.sort((a, b) => a - b);
    answer.push(arr[k - 1]);
  });
  return answer;
}
