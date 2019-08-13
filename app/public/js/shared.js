var socket = io();

function navbarInit() {
	// load navbar html from template
    $('#navbar-div').load('/html/shared-navbar.html');

    // Dynamically load other navbar content
	//socket.emit('Get All Runs')
}


socket.on('Example', function(input){
	
});
