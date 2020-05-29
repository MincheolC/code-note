function solution(operations) {
  const values = [];

  operations.forEach((operation) => {
    const [command, value] = operation.split(" ");
    if (command === "I") {
      values.push(parseInt(value, 10));
      values.sort((a, b) => a - b);
    } else if (values.length > 0) {
      if (value === "-1") {
        values.shift();
      } else {
        values.pop();
      }
    }
  });
  const len = values.length;
  if (len === 0) {
    return [0, 0];
  }
  if (len === 1) {
    return [values[0], values[0]];
  }
  return [values[len - 1], values[0]];
}
