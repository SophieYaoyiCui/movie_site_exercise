const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const route = require('./routes/routing');

// for session storage
const cookieParser = require('cookie-parser');
const session = require('express-session');

//session recognition
app.use(cookieParser('movie-secret'));
app.use(session({
    secret: "movie",
    resave: "true",
    saveUninitialized: "true"
}));

//set up middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //true for more complexed data
var jsonParser = bodyParser.json();
//set routes
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/express', urlencodedParser, route);

// view setting
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// connecting angular with express
// app.use('/', express.static('../client/dist'));

app.get('/', function (req, res) {
  res.render('index');
});

// start server
app.listen(8080, function () {
  console.log('listening on port 8080!')
})