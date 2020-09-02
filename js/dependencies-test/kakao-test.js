const axios = require('axios');
const qs = require('qs');

const KAKAO_AUTH = 'https://kauth.kakao.com';

const getAuthorizationCode = async () => {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
            client_id: '820ecc80429009eba61233e343ce4705',
            redirect_uri: 'http://localhost',
            response_type: 'code',
        }),
        url: `${KAKAO_AUTH}/oauth/authorize`,
    };
    const response = await axios.request(options);
    console.log(response);
};

getAuthorizationCode();
