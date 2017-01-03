var http = require('http');

// options to be used by request
var options = {
	host: '',
	port: '8000',
	path: '/index.html'
};

// callback function is used to deal with response
var callback = function(response) {
	// continuously update stream with data
	var body = '',
	response.on('data', funtion(data) {
		body += data;
	});
	
	response.on('end', function() {
		// data received completely
		console.log(body);
	});
}

// make request to server
var req = http.request(options, callback)l
req.end();