const {
  get,
} = require('../helpers/restful');

const baseURL = 'http://localhost:3000';

async function getTankData() {
  const tankData = await get({ url: '/tankDatas', baseURL });
  if (!tankData) return;
  console.log(tankData);
}

async function getTanks() {
  const tanks = await get({ url: '/tanks', baseURL });
  if (!tanks) return;
  console.log(tanks);
}

module.exports = {
  getTankData,
  getTanks,
};