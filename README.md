To get it started, do npm install, then in folder "server" execute command "npm run start". 
In DigitalOcean, I have run "nohup npm start &" to keep the site running at 67.205.133.154:8080

This is a project to exercise following items:

1. Create an app in any framework of your choosing (web - react, angular, vue, etc., java, .NET, python, etc)

* using NodeJs, Express/Connect framework, and DigitalOcean Server 
* focus on the server side, removed Angular from previous work
* key packages: express, dotenv, (angularCLI, typescript)
 
2. Have the app hit against IMDB APIs (there are several “free” options online and may require a key)

* using OMDB, http://private.omdbapi.com
* key is stored locally, hidden from the code
 
3. Display a list of at least 5 movies of any kind and display: Title, Year, and some other piece of meta-information (e.g. Metascore or Genre)

* pre-decided a list of movie titles
* hit API to retrieve their meta data based on title, seletct a few properties and store in memory 
* /server/public/movieObjects
 
4. Sort the list of movies by at least two different fields (aim for all of them if possible)
* option to sort by two fields, drop down menu to choose among three properties
* current implementation only sorts by one field, no impact for current list of movies as no two objects miss same properties
* tricky case is when one or both objects miss same properties and need second field to decide order
* 
 
5. Be able to click on or select the title or row of each movie to get to another page where more metadata on the movie is displayed. Any additional data you decide to display on the details page for the movie is fine, but it must include movie poster image.
* use loop to generate html for each movie
* use poster url in memory to display image, rather than hit API on every call
 
6. If a browser app, consider navigation issues when hitting a back button (browser) from display details to list
* use cookie to trace a user's foorprint
 
7. Deliver solution as runnable code in a public repository - GitHub works fine for this – please place in a github repo
* https://github.com/SophieYaoyiCui/movie_site_exercise.git
 
8. Include any build instructions if necessary (node, npm, webpack, visual studio, intelliJ, maven, etc)
* node app
 
9. Don’t get hung-up on UI/design (though bonus points if it looks half-way decent)
* not trying hard on UI at all
 
