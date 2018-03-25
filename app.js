
var cookieSession = require('cookie-session')
const cors = require('cors');
var exphbs  = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie-parser');
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const bycrypt = require('bcryptjs');
const local = require('passport-local').Strategy;
const app = express();



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var paymentData = {
    productinfo: "test",
    txnid: "1234",
    amount: "10.2",
    email: "rsnk2013@gmail.com",
    phone: "9789794377",
    lastname: "last",
    firstname: "first",
    surl: "http://localhost:5000/success", //"http://localhost:3000/payu/success"
    furl: "http://localhost:5000/fail", //"http://localhost:3000/payu/fail"
};

app.get('/new',(req,res)=>{
res.json("sdf");
})
app.get('/new2',(req,res)=>{
  var payumoney = require('payumoney-node');
payumoney.setKeys("6lBOiuPp", "SYViv7VTpq", "EbzNYNb1JvNMQ3g8ywUPCmsSm+v08Rrm8pk1prKph94=");

payumoney.isProdMode(true); // production = true, test = false

var paymentData = {
    productinfo: "test",
    txnid: "1234",
    amount: "10.2",
    email: "rsnk2013@gmail.com",
    phone: "9789794377",
    lastname: "last",
    firstname: "first",
    surl: "http://localhost:5000/success", //"http://localhost:3000/payu/success"
    furl: "http://localhost:5000/fail", //"http://localhost:3000/payu/fail"
};

payumoney.makePayment(paymentData, function(error, response) {
  console.log(error);
  if (error) {
    // Some error
        console.log("error");

  } else {
    // Payment redirection link
    console.log(response);
  }
});
    
})





// Using port 5000 or environmental port
const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log("Server started ...")
});