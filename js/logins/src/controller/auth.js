const axios = require("axios");
const qs = require("qs");

const kakao = {
  clientID: process.env.KAKAO_CLIENT_ID,
  clientSecret: process.env.KAKAO_SECRET, 
  redirectUri: "http://localhost:3000/auth/kakao/callback",
};

const loginKakao = (_, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname`;
  res.redirect(kakaoAuthURL);
};

const fetchKakaoToken = async (code) => {
  const response = await axios({
    method: "POST",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    data: qs.stringify({
      grant_type: "authorization_code",
      client_id: kakao.clientID,
      client_secret: kakao.clientSecret,
      redirectUri: kakao.redirectUri,
      code,
    }),
  });
  return response.data;
};

const fetchKakao = async (token) => {
  const response = await axios({
    method:'get',
    url:'https://kapi.kakao.com/v2/user/me',
    headers:{
        Authorization: `Bearer ${token}`
    }
  })
}

const kakaoCallback = async (req, res) => {
  try {
    console.log("Fetch KakaoToken")
    const {access_token} = await fetchKakaoToken(req.query.code)
    console.log("Fetch Me")
    const response = await fetchKakao(access_token)
    console.log(response)
    
    return res.send('success')
  } catch (e) {
    return res.json(e.data)
  }
};

module.exports = {
  loginKakao,
  kakaoCallback,
};
