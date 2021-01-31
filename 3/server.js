const http = require('http');
http.createServer(function(request, response) {
    if (request.method === 'GET') {
        response.write(request.url);
        response.end();
    }
}).listen(5005);