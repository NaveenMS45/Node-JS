// Modules

// commonJS, every file is module (by default)
// Modules - Encapsulated code (only shared Minimum)

const names = require('./4-names')
console.log(names)
// o/p
// { john: 'john', peter: 'peter' }

const sayHi = require('./5-utils')
 sayHi(`Rohit`)
 sayHi(names.john)
 sayHi(names.peter)
 
// output
/*Hello there Rohit
Hello there john
Hello there peter*/

const data = require('./6-alternative-flavour')
console.log(data)
// output
/* { john: 'john', peter: 'peter' }
Hello there Rohit
Hello there john
Hello there peter
{ items: [ 'item1', 'item2' ], singlePerson: { name: 'babu' } } */

require('./7-mind-grenade')
// output
// the sum is : 15