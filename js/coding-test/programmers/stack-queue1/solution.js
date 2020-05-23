function solution(heights) {
  const answer = [];
  const topStack = [];

  answer.push(0);
  topStack.push({ height: heights[0], index: 1 });

  for (let i = 1; i < heights.length; i += 1) {
    const tempStack = [];
    let exTopHeight = topStack[topStack.length - 1];

    while (exTopHeight && exTopHeight.height <= heights[i]) {
      exTopHeight = topStack.pop();
      tempStack.push(exTopHeight);
    }

    while (tempStack.length !== 0) {
      topStack.push(tempStack.pop());
    }

    const answerHeight = exTopHeight ? exTopHeight.index : 0;
    answer.push(answerHeight);
    topStack.push({ height: heights[i], index: i + 1 });
  }

  return answer;
}

function solution1(heights) {
  return heights.map((v, index) => {
    let i = index;
    while (i) {
      i -= 1;
      if (heights[i] > v) {
        return i + 1;
      }
    }
    return 0;
  });
}
