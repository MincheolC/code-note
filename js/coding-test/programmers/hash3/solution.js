// 위장
function solution(clothes) {
  let answer = 1;
  const mapGroupByType = {};

  clothes.forEach(([name, type]) => {
    const exValue = mapGroupByType[type] || 1;
    mapGroupByType[type] = exValue + 1;
  });

  Object.values(mapGroupByType).forEach((value) => { answer *= value; });
  return answer - 1;
}
