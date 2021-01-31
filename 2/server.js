const http = require('http');
const fs = require('fs');
http.createServer(function(request, response) {
    if (request.url === '/json' && request.method === 'GET') {
        fs.readFile("./example.json", "utf8", (err, data) => {
            if (err) console.log(err.message);
            response.write(data);
            response.end();
        })
    } else {
        response.write("bad request");
        response.end();
    }
}).listen(5005);