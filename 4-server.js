const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello world')
})

server.listen(5100, () => {
    console.log('listening on port : 5000...')
})


// output refresh browser

/**listening on port : 5000...
request event
request event
request event
request event
request event
request event
*/