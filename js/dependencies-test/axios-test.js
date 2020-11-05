const axios = require('axios');
const _ = require('lodash');

const baseURL = 'http://localhost:5000';

function createRandomValue(from, to, float = false) {
  return _.random(from, to, float);
}

async function post({ url, baseURL, data }) {
  const options = {
    url,
    baseURL,
    method: 'post',
    data,
  };

  return axios(options);
}

async function postTankData() {
  try {
    const response = await post({ url: '/tank-datas', baseURL, data: {
      name: 'tank1',
      temp: parseFloat(createRandomValue(26.4, 26.6, true).toFixed(1)),
      ph: parseFloat(createRandomValue(2.6, 4.1, true).toFixed(2)),
      dox: createRandomValue(40, 50),
      brix: parseFloat(createRandomValue(6, 8, true).toFixed(1)),
      timestamp: Math.floor(Date.now() / 1000),
    }});
  } catch (e) {
    console.error(e.response || e.message);
  }
}

setInterval(() => {
  postTankData();
}, 5000);