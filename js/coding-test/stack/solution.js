function interpretCommand(stack, output, command, value) {
  switch (command) {
    case 'push':
      stack.push(value);
      break;
    case 'pop':
      output.push(stack.length ? stack.pop().toString() : '-1');
      break;
    case 'size':
      output.push(stack.length.toString());
      break;
    case 'empty':
      output.push(stack.length ? '0' : '1');
      break;
    case 'top':
      output.push(stack.length ? stack[stack.length - 1].toString() : '-1');
      break;
    default:
  }
}

function solution(inputArray) {
  const stack = [];
  const output = [];
  inputArray.forEach((element) => {
    const [command, value] = element.split(' ');
    interpretCommand(stack, output, command, value);
  });
  return output;
}

module.exports = {
  solution,
  interpretCommand,
};
