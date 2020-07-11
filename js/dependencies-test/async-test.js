function printOne() {
  setTimeout(() => console.log(1), 3000);
}


async function run() {
  printOne();
  console.log('2')
  await printOne();
  console.log('4')
}

run();
