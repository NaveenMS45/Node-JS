// HTTP MODULE

const http = require('http');

const server = http.createServer((req,res) => { // request,response 
    //    console.log(req)
    //    res.write('Welcome to our homepage')
    //    res.end()    
    if (req.url === '/') {
        res.end('welcome to our Homepage')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1> Opps !</h1>
    <p>we can't seem to find the page you are looking for </p>
    <a href="/">back</a>
   `)
})

server.listen(5600)  // Go to chrome and search for "localhost:5600"

// op
 //console.log(req) // end the server by executing ctrl + c .
/*constructed: true,
prefinished: false,
errorEmitted: false,
emitClose: false,
autoDestroy: true,
errored: null,
closed: false,
closeEmitted: false,
[Symbol(kOnFinished)]: []
},
allowHalfOpen: true,
_sockname: null,
_pendingData: null,
_pendingEncoding: '',
server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
_events: [Object: null prototype],
_eventsCount: 2,
_maxListeners: undefined,
_connections: 2,
_handle: [TCP],
_usingWorkers: false,
_workers: [],
_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: false,
keepAlive: false,
keepAliveInitialDelay: 0,
httpAllowHalfOpen: false,
timeout: 0,
keepAliveTimeout: 5000,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
headersTimeout: 60000,
requestTimeout: 0,
_connectionKey: '6::::5500',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 2
},
_server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
_events: [Object: null prototype],
_eventsCount: 2,
_maxListeners: undefined,
_connections: 2,
_handle: [TCP],
_usingWorkers: false,
_workers: [],
_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: false,
keepAlive: false,
keepAliveInitialDelay: 0,
httpAllowHalfOpen: false,
timeout: 0,
keepAliveTimeout: 5000,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
headersTimeout: 60000,
requestTimeout: 0,
_connectionKey: '6::::5500',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 2
},
parser: HTTPParser {
'0': [Function: bound setRequestTimeout],
'1': [Function: parserOnHeaders],
'2': [Function: parserOnHeadersComplete],
'3': [Function: parserOnBody],
'4': [Function: parserOnMessageComplete],
'5': [Function: bound onParserExecute],
'6': [Function: bound onParserTimeout],
_headers: [],
_url: '',
socket: [Circular *1],
incoming: [Circular *2],
outgoing: null,
maxHeaderPairs: 2000,
_consumed: true,
onIncoming: [Function: bound parserOnIncoming],
[Symbol(resource_symbol)]: [HTTPServerAsyncResource]
}, */
