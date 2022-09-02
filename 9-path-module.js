
// path
const path = require('path'); // op--> /

console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base)

/* op
/
/content/subfolder/test.txt
test.txt */

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute) 

// /home/naveen/Desktop/Node_learning/content/subfolder/test.txt
