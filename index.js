const express = require('express'),
     path = require('path');
const bodyParser = require('body-parser'),http = require('http');

const app = express();
const hostname = 'localhost';
const port = 3000;
const nodemailer = require('nodemailer');
//var smtpTransport = require('nodemailer-smtp-transport');
var cors = require("cors");
app.use(bodyParser.json())
app.use(cors());

app.use(express.static(path.join(__dirname,'/dist/examautomata')));

app.get('/*', (req,res)=>{
    
res.sendFile(path.join(__dirname,'/dist/examautomata/index.html'));

});
app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started.');
});

app.post('/email',(req,res) => {

    nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: false, // secure:true for port 465, secure:false for port 587
        service: 'Gmail',
        auth: {
            user: 't.manikantareddy160@gmail.com', // generated ethereal user
            pass: '@9629601733' // generated ethereal password
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
    });
    var king = Math.floor(1000 + Math.random() * 9000);
    //king.toString();
    // setup email data with unicode symbols
    var raw = '' + king;
    let mailOptions = {
        from: 't.manikantareddy160@gmail.com', // sender address
        to: req.body.emailid, // list of receivers
        subject: 'OTP ✔', // Subject line
        text: raw// plain text body
    };
    //console.log(typeof raw);

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send({success:false});
            return console.log(error);
        }
        res.send(raw);
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
});

app.post('/quespass',(req,res) => {

    nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 't.manikantareddy160@gmail.com', // generated ethereal user
            pass: '@9629601733' // generated ethereal password
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
    });
    // setup email data with unicode symbols
     /*var text123 = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 7; i++)
    text123 += possible.charAt(Math.floor(Math.random() * possible.length));

    var raw123 = '' + text123;*/
   // var king1 = Math.floor(10000 + Math.random() * 90000);
    //var raw123 = '' + king1;
    let mailOptions = {
        from: 't.manikantareddy160@gmail.com', // sender address
        to: req.body.emailid, // list of receivers
        subject: 'Password For QuestionPaperId:' + req.body.quesid, // Subject line
        text: req.body.text123// plain text body
    };
    //console.log(typeof raw);

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send({success:false});
            return console.log(error);
        }
        res.send(req.body.text123);
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
});

app.post('/date',(req,res) => {

      const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d1 = new Date().getTime()+19800000;
var d = new Date(d1);
 var day, month,monthno,year,min,hr,sec;
  day = d.getDate();
  month = monthNames[d.getMonth()];
  monthno = d.getMonth();
  year = d.getFullYear();
  min = d.getMinutes();
  hr = d.getHours();
  sec = d.getSeconds();

  res.send({"day":day,"month":month,"monthno":monthno,
      "year":year,"hr":hr,"min":min,"sec":sec});

});

app.post('/date1',(req,res) => {

    var hello = this;
var countDownDate = new Date(req.body.month
  +req.body.day+","
  +req.body.year+" "
  +req.body.hr+":"
  +req.body.min+":"+req.body.sec).getTime();

  var now = new Date().getTime()+19800000;
  
  res.send({"time": now, "countDown": countDownDate})

});
