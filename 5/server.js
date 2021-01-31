const http = require('http');
const fs = require('fs');
http.createServer(function(request, response) {
    if (request.url === '/' && request.method === 'GET') {
        fs.readFile("./public/index.html", "utf8", (err, html) => {
            if (err) console.log(err.message);
            response.write(html);
            response.end();
        })
    } else {
        response.write("Not Found");
        response.end();
    }
}).listen(5005);