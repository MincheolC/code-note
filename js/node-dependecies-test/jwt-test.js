const fs = require('fs')
const base64 = require('base64url');
const crypto = require('crypto');
const signatureFunction = crypto.createSign('RSA-SHA256');

const JWT_PK = fs.readFileSync('jwt.key', 'utf8');
const JWT_HEADER = {
    alg: "RS256",
    typ: "JWT",
}
const CURRENT = new Date().getTime() / 1000;
const JWT_CLAIM = {
    iss: "alarm-talk-bot@spreadsheet-for-alarm-talk.iam.gserviceaccount.com",
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: CURRENT + 3000,
    iat: CURRENT,
}

const headerObjString = JSON.stringify(JWT_HEADER);
const payloadObjString = JSON.stringify(JWT_CLAIM);

const base64UrlHeader = base64(headerObjString);
const base64UrlPayload = base64(payloadObjString);

signatureFunction.write(base64UrlHeader + '.' + base64UrlPayload);
signatureFunction.end();

const signatureBase64 = signatureFunction.sign(JWT_PK, 'base64');
const signatureBase64Url = base64.fromBase64(signatureBase64);

function createJWT () {
    return `${base64UrlHeader}.${base64UrlPayload}.${signatureBase64Url}`
}

console.log(createJWT());
