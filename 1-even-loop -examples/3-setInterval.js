setInterval(() => {
    console.log('helloworld')
}, 2000)

console.log('I will run first')
// process stays alive unless
// kill process CONTROL + C
// unexpected error

/* output
I will run first
helloworld
helloworld
helloworld
helloworld

*/


