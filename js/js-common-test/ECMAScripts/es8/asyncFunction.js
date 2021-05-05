async function wait(n) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(true), n));
}

// Async Function in Object
const obj = {
  async foo(n) {
    return await wait(n);
  }
}
obj.foo(3000).then(result => console.log(result));

// Parallal vs Series
async function series() {
  await wait(1500);
  await wait(1500);
  return 'series done!';
}

async function parallel() {
  const wait1 = wait(1500);
  const wait2 = wait(1500);
  await wait1;
  await wait2;
  return 'parallel done!';
}

series().then(result => console.log(result));
parallel().then(result => console.log(result));