/**
 * https://myaccount.google.com/u/1/lesssecureapps 허용
 */

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'homess.team@gmail.com',
    pass: '!2qwaszx',
  }
});

const message = {
  from: 'homess.team@gamil.com',
  to: 'mccha0407@gmail.com',
  subject: 'Hello',
  text: 'Email Test',
  html: '<p>HTML version of the message</p>'
};

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});