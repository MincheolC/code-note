const express = require("express");
const models = require("../models");
const router = express.Router();

const jwt = require("jsonwebtoken");
const secretObj = require("../config/jwt");

router.post("/login", (req, res) => {
    const { body } = req;
    if (!body) {
        return res.json({
            error: "you should login",
        });
    }
    const { email, password } = body;
    if (!email || !password) {
        return res.json({
            error: "you should send email and password",
        });
    }

    // default : HMAC SHA256
    models.user.findOne({
        where: { email }
    }).then(user => {
        if (user.pwd === password ) {
            const token = jwt.sign({ email }, secretObj.secret, { expiresIn: "5m" });
            res.cookie("user", token);
            return res.json({
                token,
            });
        }
    });
});

// Cookie에 토큰 저장
router.get("/cookie", (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) {
        return res.json({
            error: "you should send email and password",
        });
    }

    // default : HMAC SHA256
    models.user.findOne({
        where: { email }
    }).then(user => {
        if (user.pwd === password ) {
            const token = jwt.sign({ email }, secretObj.secret, { expiresIn: "5m" });
            res.cookie("user", token);
            return res.json({
                token,
            });
        }
    });
});

// Cookie에 저장된 토큰 사용해서 api 호출
router.get("/me", (req, res) => {
    let token = req.cookies.user;

    jwt.verify(token, secretObj.secret, (err, decoded) => {
        if(decoded){
            res.send("OK it's you")
        }
        else{
            res.send("Who are you?")
        }
    });
});

router.get('/', (req, res) => res.send('OK'));

module.exports = router;
