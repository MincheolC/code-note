// Generator
function* generatorSequence(start, end) {
  for (let i = start; i < end; i += 1) {
    yield i;
  }
}

for (let value of generatorSequence(1, 5)) {
  console.log(value);
}

// Async Generator
async function* asyncGeneratorSequence(start, end) {
  for (let i = start; i < end; i += 1) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  for await (let value of asyncGeneratorSequence(1, 5)) {
    console.log(value);
  }
})()
