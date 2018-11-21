1. Pages include:
	a. /home
	b. /express, /express/:id
	c. /gallery = /angular, /gallery/:id
	d. /apiphotos
	
'/' and '/angular' redirect to '/gallery'. '/home' contains entry to all three views - api, express and angular.

2. I added navigation, footer, jumbotron components, moved vote counts to the navigation component, and added a way to return to homepage from each view.

3. I ran into all kinds of routing issues when put together the final project. The biggest one was that client and serve each worked fine, but when linked together through /client/dist, refreshing a page stopped working. I made sure no routing names overlap and the issue persisted. The solution is to replace what Larry showed in class that serves angular at root with the following:
	app.use(express.static(path.join(_dirname, 'dist')));
	app.get('*', (req,res)=>{
		res.sendFile(path.join(_dirname, 'dist/index.html'));
	});

Then generate dist folder in /server when run ng build in client by using this command:
	ng build & rm -rf ../server/dist && cp -R dist ../server/
