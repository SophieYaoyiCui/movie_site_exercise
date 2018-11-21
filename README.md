This is a project to exercise following items:

- Create an app in any framework of your choosing (web - react, angular, vue, etc., java, .NET, python, etc)
* I'm using NodeJs, Express/Connect framework, MangoDB, Angular and DigitalOcean Server 
* key packages: nodemon, log-util, express, mangoDB. More details can be found in package.json file in server folder
 
- Have the app hit against IMDB APIs (there are several “free” options online and may require a key)
* I'm using OMDB, http://private.omdbapi.com
 
- Display a list of at least 5 movies of any kind and display: Title, Year, and some other piece of meta-information (e.g. Metascore or Genre)
 
- Sort the list of movies by at least two different fields (aim for all of them if possible)
 
- Be able to click on or select the title or row of each movie to get to another page where more metadata on the movie is displayed. Any additional data you decide to display on the details page for the movie is fine, but it must include movie poster image.
 
- If a browser app, consider navigation issues when hitting a back button (browser) from display details to list
 
- Deliver solution as runnable code in a public repository - GitHub works fine for this – please place in a github repo
 
- Include any build instructions if necessary (node, npm, webpack, visual studio, intelliJ, maven, etc)
* npm run start-dev
 
- Don’t get hung-up on UI/design (though bonus points if it looks half-way decent)
 

More details on the project:
 1. Pages include:
	a. /home
	b. /express, /express/:id
	c. /gallery = /angular, /gallery/:id
	d. /apiphotos
	
'/' and '/angular' redirect to '/gallery'. '/home' contains entry to all three views - api, express and angular.

2. I used navigation, footer, jumbotron components and a counter for votes

3. Once issue I encountered was that client and serve each worked fine, but doesn't work when linked together through /client/dist. No routing names overlap. So I used the following
	app.use(express.static(path.join(_dirname, 'dist')));
	app.get('*', (req,res)=>{
		res.sendFile(path.join(_dirname, 'dist/index.html'));
	});
Then generate dist folder in /server when run ng build in client and replace it with the dist.
	ng build & rm -rf ../server/dist && cp -R dist ../server/
