// GLOBALS     -NO WINDOW !!!
// _dirname    -path to current directory
// _filename   -file Name
// recquire    -function to use module(common JS)
// module      -info about current module(file)
// process     -info about env where the prog is being executed.

// npm - global command, come with node 
// npm --version

// local dependancy - use it only in this particular project
// npm i <packageName>

// global dependancy - use it in any project
// npm install -g <packageName>
// sudo install -g <packagename> (mac)

// package.json - mainfest file (stores importan info about project/package)
// manual approach (create package.json in the root,create properties etc.)
// npm init (step by step, press enter to
// npm init -y (everything default)

var http = require('http');
var fs = require('fs');

http
    .createServer(function(req, res, next) {
        // const text = fs.readFileSync('./content/big.txt','utf8')
        // res.end(text)
        const filestream = fs.createReadStream('./content/big.txt','utf8');
        filestream.on('open',()=>{
    filestream.pipe(read)        
        })
        filestream.on('error',(err)=>{
            res.end(err)
        })
    })
    .listen(5000)