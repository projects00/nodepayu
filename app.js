
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



// Using port 5000 or environmental port
const port = process.env.PORT || 5000;



app.get('/',(req,res)=>{

    
res.render("index");
})

app.listen(port, () => {
    console.log("Server started ...")
});