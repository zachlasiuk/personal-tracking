var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
 	res.sendFile(__dirname + '/index.html');
});

app.get('/overview', function(req, res){     
  res.sendFile(path.join(__dirname,  '/overview.html'));   
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