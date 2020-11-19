const axios = require('axios');

function sendMonitoringResult() {
  const SLACK_URL =
    'https://hooks.slack.com/services/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';
  axios({
    method: 'post',
    url: SLACK_URL,
    data: {},
  });
}

function getRealtimeData(callback) {
  const API = 'http://fms.brewguru.org:5000/tank-datas';
  axios({
    method: 'get',
    url: API,
  })
    .then((response) => callback(null, response.data))
    .catch((error) => callback(error));
}

getRealtimeData((err, data) => {
  console.log(data);
});
