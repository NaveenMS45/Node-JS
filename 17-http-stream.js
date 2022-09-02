var http = require('http');
var fs = require('fs');

http
    .createServer(function(req, res, next) {
        const text = fs.readFileSync('./content/big.txt','utf8')
        res.end(text)
    })
    .listen(5000)