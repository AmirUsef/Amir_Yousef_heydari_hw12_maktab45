const http = require('http');
http.createServer(function(request, response) {
    if (request.url === '/' && request.method === 'GET') {
        response.write("Hello Web Application");
        response.end();
    } else if (request.url === '/about' && request.method === 'GET') {
        response.write("About Me");
        response.end();
    } else if (request.url === '/contact' && request.method === 'GET') {
        response.write("Contact Us");
        response.end();
    } else if (request.url === '/login' && request.method === 'GET') {
        response.write("Login Page");
        response.end();
    } else if (request.url === '/admin' && request.method === 'GET') {
        response.write("Admin");
        response.end();
    } else {
        response.write("Not Found");
        response.end();
    }
}).listen(3000);