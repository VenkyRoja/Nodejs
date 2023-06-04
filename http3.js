const http = require('http');

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/abc') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

    if (req.url === '/xyz') {
        res.write('XYZ');
        res.end();
    }

    if (req.url === '/xyz/aaa') {
        res.write('XYZ -> aaa');
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000 ...')