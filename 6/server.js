const http = require('http');
const fs = require('fs');
http.createServer(function(request, response) {
    if (request.url === '/' && request.method === 'GET') {
        fs.readFile("./public/index.html", "utf8", (err, html) => {
            if (err) console.log(err.message);
            response.setHeader('Content-Type', 'text/html');
            response.write(html);
            response.end();
        })
    } else if (request.url === '/style.css' && request.method === 'GET') {
        fs.readFile("./public/style.css", "utf8", (err, css) => {
            if (err) console.log(err.message);
            response.write(css);
            response.end();
        })
    } else if (request.url === '/main.js' && request.method === 'GET') {
        fs.readFile("./public/main.js", "utf8", (err, js) => {
            if (err) console.log(err.message);
            response.write(js);
            response.end();
        })
    } else if (request.url === '/wolf.jpg' && request.method === 'GET') {
        fs.readFile("./public/wolf.jpg", (err, data) => {
            if (err) console.log(err.message);
            response.writeHead(200, { 'Content-Type': 'image/jpeg' })
            response.end(data);
        })
    }
}).listen(5005);