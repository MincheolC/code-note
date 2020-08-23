const ModbusRTU = require("modbus-serial");
const config = require("./config.json");
const { port, host } = config.development.modbus;

function getRandomValue(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}

const createRandomArray = () => {
  const addr0 = getRandomValue(0, 99);
  const addr1 = getRandomValue(0, 35);
  const addr2 = getRandomValue(50, 70);
  return [addr0, addr1, addr2];
};

function vector() {
  let inputRegisters = createRandomArray();

  setInterval(() => {
    inputRegisters = createRandomArray();
    console.log(inputRegisters);
  }, 1000);

  return {
    getInputRegister: function (addr, unitID) {
      // Synchronous handling
      // console.log(`[${unitID}] get input register : ${inputRegisters[addr]}`);
      return inputRegisters[addr];
    },
    getHoldingRegister: function (addr, unitID, callback) {
      // Asynchronous handling (with callback)
      setTimeout(function () {
        // callback = function(err, value)
        callback(null, addr + 8000);
      }, 10);
    },
    getCoil: function (addr, unitID) {
      // Asynchronous handling (with Promises, async/await supported)
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(addr % 2 === 0);
        }, 10);
      });
    },
    setRegister: function (addr, value, unitID) {
      // Asynchronous handling supported also here
      console.log(`[${unitID}] set register : ${addr}, ${value}`);
      inputRegisters[addr] = value;
      return;
    },
    setCoil: function (addr, value, unitID) {
      // Asynchronous handling supported also here
      console.log("set coil", addr, value, unitID);
      return;
    },
    readDeviceIdentification: function (addr) {
      return {
        0x00: "MyVendorName",
        0x01: "MyProductCode",
        0x02: "MyMajorMinorRevision",
        0x05: "MyModelName",
        0x97: "MyExtendedObject1",
        0xab: "MyExtendedObject2",
      };
    },
  };
}

// set the server to answer for modbus requests
console.log(`ModbusTCP listening on modbus://${host}:${port}`);
const serverTCP = new ModbusRTU.ServerTCP(vector(), {
  host,
  port,
  debug: true,
  unitID: 1,
});

serverTCP.on("socketError", function (err) {
  // Handle socket error if needed, can be ignored
  console.error(err);
});
