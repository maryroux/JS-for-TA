const http = require("http");

http.createServer( function(request, response) {
response.setHeader('Access-Control-Allow-Origin', '*');
 response.writeHead(200, {'Content-Type': 'text/plain'});
 response.write('Your vote is accepted: '+ new Date());
 response.end();
 }).listen(8000);
 console.log('Server running at http://127.0.0.1:8000/');
