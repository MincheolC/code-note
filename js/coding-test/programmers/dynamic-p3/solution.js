/*
 * 정수 삼각형
 */

function solution(triangle) {
  const accumulation = [];

  triangle.forEach((nums, depth) => {
    const temp = [];
    if (depth === 0) {
      nums.forEach((num) => {
        temp.push(num);
      });
    } else {
      const exDepth = accumulation[depth - 1];
      const len = exDepth.length;
      nums.forEach((num, index) => {
        if (index === 0) {
          temp.push(exDepth[index] + num);
        } else if (index === len) {
          temp.push(exDepth[index - 1] + num);
        } else {
          const left = exDepth[index - 1] + num;
          const right = exDepth[index] + num;
          temp.push(left > right ? left : right);
        }
      });
    }
    accumulation.push(temp);
  });

  return Math.max(...accumulation.pop());
}

function solution2(triangle) {
  return Math.max(
    ...triangle.reduce((cost, line) => {
      return line.map((v, index) => {
        return v + Math.max(index < cost.length ? cost[index] : 0, index > 0 ? cost[index - 1] : 0);
      });
    }, []),
  );
}
