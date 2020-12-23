const http = require("http");
const os = require("os");
const cm = require('./personalmodule');
http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`${cm.myDateTime(os.userInfo().username)}`);
    response.end();
    }).listen(8000);
    console.log('Server running at http://127.0.0.1:8000/');