var express = require('express');
var path = require('path');
var url = require('url');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');
//routing
var photos = require('./routes/photos');
var apiphotos = require('./routes/apiphotos');
// app
var app = express();

//connect to database
require('dotenv').config();
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0-shard-00-00-rjckr.mongodb.net:27017,cluster0-shard-00-01-rjckr.mongodb.net:27017,cluster0-shard-00-02-rjckr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`);

//session recognition
app.use(cookieParser('cscie31-secret'));
app.use(session({
    secret: "cscie31",
    resave: "true",
    saveUninitialized: "true"
}));

//set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// homepage provides entrance to API and HTML access
app.get('/home', (req, res) => {
    res.render('homepage');
});
// set a separate routing path to display html page from homepage, outside of the apiphotos logic
app.get('/apipage', (req, res) => {
    res.render('api');
});

//set up middleware
var urlencodedParser = bodyparser.urlencoded({ extended: false }); //true for more complexed data
var jsonParser = bodyparser.json();
//set routes
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/express', urlencodedParser, photos);
app.use('/apiphotos', jsonParser, apiphotos);

//following will add angular routing properly
//requires run this command from /client to generate dist folder to /server
//ng build & rm -rf ../server/dist && cp -R dist ../server/
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// use flash 
app.use(flash());
// catch any remaining routing errors
app.use((req, res, next)=>{
  var err = new Error('Not Found' + req.url);
  err.status = 404;
  next(err);
});

module.exports = app;