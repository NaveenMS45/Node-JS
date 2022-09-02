// Modules
// commonJS, every file is module (by default)
// Modules - Encapsulated code (only shared Minimum)

// local
const secret = `SECRET SECRET`
// share
const john = 'john'
const peter = 'peter'

//console.log(module)
module.exports = { john, peter }

// output 

// Module {
//     id: '.',
//     path: '/home/naveen/Desktop/Node_learning',
//     exports: {},
//     filename: '/home/naveen/Desktop/Node_learning/3-names.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/naveen/Desktop/Node_learning/node_modules',
//       '/home/naveen/Desktop/node_modules',
//       '/home/naveen/node_modules',
//       '/home/node_modules',
//       '/node_modules'
//     ]
// }