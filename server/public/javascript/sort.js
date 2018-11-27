/* sort the movies by imdbRating, release date, title, and/or
 * 1st sortby goes first, 2nd sortby next, default is sorting by title
 * It doesn't matter here but consideration should be given to the case when both objects have missing property, 
 * Currently two sorting fields are NOT used together and does not impact the results
 */

sortMovie(){

var movieObjects = require('./movieObjects');
// get user choice
var sortBy1 = documentGetElementById('sortBy1');
var sortBy2 = documentGetElementById('sortBy2');

// helper function
// ascending
// Need test if date works!!!
var sorter = function(prop) {
    return function(a,b) {
    	// The basic sort function only work for numbers
    	// one of the property may not exist
    	// but in this specific list there is no more than one null for each property
        if (typeof a[prop] == "number" || typeof b[prop] == "number" ) {
            return (a[prop] - b[prop]);
        } else {
            return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0));
        }
    };
};

// each sortBy is considered independently
// default is sorting by title
if(sortBy1){
	movieObjects.sort(sorter("sortBy1"));
} else if(sortBy2){
	movieObjects.sort(sorter("sortBy2"));
} else { 
	movieObjects.sort(sorter("movieTitle"));
}

for(var j in movieObjects)
    document.writeln(movieObjects[j].movieTitle);
}