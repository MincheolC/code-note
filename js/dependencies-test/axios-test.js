const axios = require('axios');

const baseURL = 'http://localhost:3000';

async function get({ url, baseURL }) {
  const options = {
    url,
    baseURL,
    method: 'get',
  };

  return axios(options);
}

async function getTankData() {
  try {
    const tankData = await get({ url: '/tankDatas', baseURL });
    console.log(tankData.data);
  } catch (e) {
    console.error(e.response || e.message);
  }
}

getTankData();