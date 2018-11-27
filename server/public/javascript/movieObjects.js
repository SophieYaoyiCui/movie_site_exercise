//pick up apikey as a hidden enviornment variable
require('dotenv').config();
//pre-fixed list of movies
const movies = ["God Father", "Bat Man", "La La Land", "Elizabeth", "Blade Runner", "The Lobster"];
// store in memory and then user session, since only six movies
var movieObjects = [];

movies.forEach(function(m) {
  const url = 'http://www.omdbapi.com/?apikey=' + process.env.apiKey + '&t=' + m;
  request(url, function (err, response, body) {
      if(err){
        console.log('error:', error);
      } else {
        //read the json response
        let jsonBody = JSON.parse(body);
        // pick only a few properties to store
        var obj = {};
        obj.movieTitle = jsonBody.Title || '';
        obj.releaseDate = new Date(jsonBody.Released) || '';
        obj.imdbRating = jsonBody.imdbRating || ''; 
        obj.posterURL = jsonBody.Poster || ''; 
        obj.runTime = jsonBody.Runtime || '';
        movieObjects.push(obj);
      }
    });
});

// to check results
setTimeout(() => {
    console.log(movieObjects);
 }, 5000);

//export
module.exports = movieObjects;


