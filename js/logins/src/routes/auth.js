const express = require('express')
const router = express.Router()
const { loginKakao, kakaoCallback} = require('../controller/auth')

router.route('/kakao').get(loginKakao)
router.route('/kakao/callback').get(kakaoCallback)

module.exports = router