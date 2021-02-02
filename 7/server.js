const http = require('http');
const users = require("./users");

http.createServer(function(request, response) {
    if (request.url === '/' && request.method === 'POST') {
        let body = [];
        request.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = JSON.parse(Buffer.concat(body).toString());
            let user = users.find(item => item.userName == body.userName)
            if (user === undefined)
                response.write("wrong username");
            else if (user.password != body.password)
                response.write("wrong pass");
            else
                response.write("successful");
            response.end();
        });
    } else {
        response.write("bad request");
        response.end();
    }
}).listen(5005);