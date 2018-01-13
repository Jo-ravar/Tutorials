const express = require('express');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const router = express.Router();

function sendEmail(req, res) {
  let email = req.body.email;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'smarthyre513@gmail.com',
      pass: 'majorproject',
      /*xoauth2: xoauth2.createXOAuth2Generator({
        user: 'smarthyre513@gmail.com',
        clientId:
          ' 720566097967-o3ortbh98mjtf7evc863rghsbko7dlpm.apps.googleusercontent.com ',
        clientSecret: ' 73pcDpsdGSvewckxaEwo_3ac ',
        pass: 'majorproject',
      }),*/
    },
    /*tls: {
      rejectUnauthorized: false,
    },*/
  });
  let rand = Math.floor(Math.random() * 100 + 54),
      host = req.get('host'),
      link = 'http://' + req.get('host') + '/verify?id=' + rand;

  var mailOptions = {
    from: '"Donot Reply" <smarthyre513@gmail.com>',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html:
      'Hello,<br> Please Click on the link to verify your email.<br><a href=' +
      link +
      '>Click here to verify</a>',
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json('sent');
    }
  });
}

router.post('/', sendEmail);

module.exports = router;
