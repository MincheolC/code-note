const { parentPort } = require('worker_threads');

// receive message from Main Thread (sent by worker.postMessage())
parentPort.on('message', (task) => {
  parentPort.postMessage(task.a + task.b);
});
