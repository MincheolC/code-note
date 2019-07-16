const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.resolve(__dirname, './__test__/input.txt')).toString().split('\n');

function interpretCommand(queue, output, command, value) {
  switch (command) {
    case 'push':
      queue.push(value);
      break;
    case 'pop':
      output.push(queue.length ? queue.shift().toString() : '-1');
      break;
    case 'size':
      output.push(queue.length.toString());
      break;
    case 'empty':
      output.push(queue.length ? '0' : '1');
      break;
    case 'front':
      output.push(queue.length ? queue[0].toString() : '-1');
      break;
    case 'back':
      output.push(queue.length ? queue[queue.length - 1].toString() : '-1');
      break;
    default:
  }
}

function solution(inputArray) {
  const queue = [];
  const output = [];
  inputArray.forEach((element) => {
    const [command, value] = element.split(' ');
    interpretCommand(queue, output, command, value);
  });
  return output;
}

const output = solution(input);
output.forEach(value => console.log(value));
