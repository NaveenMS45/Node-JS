// FS

const {readFileSync, writeFileSync} = require(`fs`)
console.log(`start`)
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first, second);
// hello , This is first text file hello , This is second text file

writeFileSync(
    `./content/result-sync.txt`,
    `Here is the result : ${first}, ${second}`,
    {flag: `a`} // --> node will append instead of overwrite
)
console.log(`done with the task`)
console.log(`starting the next one`)
// op --> result-sync.txt
