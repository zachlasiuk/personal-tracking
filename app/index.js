var express = require('express');
var app = express();                    // Initializes 'app' to be a function handler that is supplied to HTTP server
var http = require('http').Server(app); // Allows Node.js to transfer data over HTTP with the app function handler
var io = require('socket.io')(http);    // Initalize instance of socket.io by passing HTTP server object
var path = require('path');             // Allows easy path manipulation



app.use(express.static(path.join(__dirname, 'public')));  // Allows serving on static assets from 'public' folder


app.get('/', function(req, res){
 	res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/overview', function(req, res){     
  res.sendFile(path.join(__dirname,  '/public/html/overview.html'));   
});

io.on('connection', function(socket){
	// Basic functionality
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});




});


http.listen(8080, function(){
 	console.log('listening on *:8080');
});