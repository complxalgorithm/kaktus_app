var http = require('http');
var fs = require('fs');
var url = require('url');

// create server
http.createServer(function(request, response) {
	// parse request containing file name
	var pathname = url.parse(request.url).pathname;
	
	// print name of the file for which request is made
	console.log("request for " + pathname + " received.");
	
	// read requested file content from file system
	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.log(err);
			
			// http status: 404
			// context type: text/plain
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			// page found
			// http status: 200
			// content type: text/plain
			response.writeHead(200, {'Content-Type': 'text/html'});
			
			// write content of the file to resposne body
			response.write(data.toString());
		}
		// send response body
		response.end();
	})
}).listen(8000);

// console will print this message
console.log('server running at http://< >:8000/');