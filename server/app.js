const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

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

//const url = `http://www.omdbapi.com/?apikey=${apikey}&t=${moviename}`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// view setting
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// connecting angular with express
app.use('/', express.static('../client/dist'));

// could delete since front is using angular
app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.Title);
})

/*
// error handling
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
		let jsonBody = JSON.parse(body);
		if(jsonBody.Poster){
			let message = `The poster address is ${jsonBody.Poster}`;
			console.log(message);
		} else{
			console.log('Poster does not exist!');
		}
  }
});*/

// start server
app.listen(8080, function () {
  console.log('listening on port 8080!')
})