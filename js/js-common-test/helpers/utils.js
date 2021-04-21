function bitToMB(n) {
  return n / 1024 / 1024;
}

function printHeapMemoryUsage() {
  const memory = process.memoryUsage();
  const heapUsed = bitToMB(memory.heapUsed);
  console.log(`Heap Memeory Usage: ${Math.round(heapUsed * 100) / 100} MB`);
}

function printMemoryUsage() {
  const memory = process.memoryUsage();
  console.log('== MemoryUsage ==');
  for (let key in memory) {
    console.log(`${key} ${Math.round(bitToMB(memory[key]) * 100) / 100} MB`);
  }
}

module.exports = {
  printHeapMemoryUsage,
  printMemoryUsage,
};