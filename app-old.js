const http = require('http');

http.createServer((req, res) => {
    // res.write('Hello World');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        name: 'Teo',
        age: 30,
        url: req.url
    }
    res.write(JSON.stringify(salida))
    res.end();
}).listen(8080);


console.log('Listen port 8080');