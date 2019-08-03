var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
 	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	// Basic functionality
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});




	socket.on('custom-event', function(value){
		io.emit('custom-event', value);
	});




});


http.listen(8080, function(){
 	console.log('listening on *:8080');
});