const ModbusRTU = require("modbus-serial");
const config = require("./config.json");

const { port, host } = config.development.modbus;
const client = new ModbusRTU();

async function setup() {
  client.setID(1);
  client.setTimeout(1000);
  await client.connectTCP(host, { port });
}

async function readData() {
  return await client.readInputRegisters(0, 3);
}

async function run() {
  await setup();

  const interval = setInterval(async () => {
    const data = await readData();
    console.log(data);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
}
run();
