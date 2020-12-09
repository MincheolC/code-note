function solution(rectangles) {
  var answer = -1;
  const { xmin, xmax, ymin, ymax } = rectangles.reduce(
    (acc, rectangle) => {
      const { xmin, xmax, ymin, ymax } = acc;
      const [x1, y1, x2, y2] = rectangle;
      return {
        xmin: xmin && xmin < x1 ? xmin : x1,
        xmax: xmax && xmax > x2 ? xmax : x2,
        ymin: ymin && ymin < y1 ? ymin : y1,
        ymax: ymax && ymax > y2 ? ymax : y2,
      };
    },
    { xmin: null, xmax: null, ymin: null, ymax: null },
  );

  console.log(xmin, xmax, ymin, ymax);

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');

  return answer;
}
