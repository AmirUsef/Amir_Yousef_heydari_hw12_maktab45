const http = require('http');
http.createServer(function(request, response) {
    if (request.url === '/' && request.method === 'GET') {
        response.write("Hello World");
        response.end();
    } else {
        response.write("bad request");
        response.end();
    }
}).listen(5005);