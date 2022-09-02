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

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log(`hello people`)