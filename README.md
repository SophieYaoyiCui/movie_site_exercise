To get it started, do npm install, then in folder "server" execute command "npm run start". 
In DigitalOcean, I have run "nohup npm start &" to keep the site running at 67.205.133.154:8080

This is a project to exercise following items:

1. Create an app in any framework of your choosing (web - react, angular, vue, etc., java, .NET, python, etc)
* using NodeJs, Express/Connect framework, MongoDB, Angular and DigitalOcean Server 
* key packages: nodemon, log-util, express, mongoDB. More details can be found in package.json file in server folder
 
2. Have the app hit against IMDB APIs (there are several “free” options online and may require a key)
* using OMDB, http://private.omdbapi.com
 
3. Display a list of at least 5 movies of any kind and display: Title, Year, and some other piece of meta-information (e.g. Metascore or Genre)

 
4. Sort the list of movies by at least two different fields (aim for all of them if possible)
 
5. Be able to click on or select the title or row of each movie to get to another page where more metadata on the movie is displayed. Any additional data you decide to display on the details page for the movie is fine, but it must include movie poster image.
* files in folder "routes" deals with the routing logic on server side and the component in Angular deals with client side 
* using "Multer" module for image upload and use file extention match to ensure image only
 
6. If a browser app, consider navigation issues when hitting a back button (browser) from display details to list
* back button is added to every page using cookie
 
7. Deliver solution as runnable code in a public repository - GitHub works fine for this – please place in a github repo
* https://github.com/SophieYaoyiCui/movie_site_exercise.git
 
8. Include any build instructions if necessary (node, npm, webpack, visual studio, intelliJ, maven, etc)
* npm run start-dev
 
9. Don’t get hung-up on UI/design (though bonus points if it looks half-way decent)
* not trying hard on UI at all. Although some features are unbearably ugly, I need focus on the architecture and navigation logic. 
 

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
