// FS

const { Console } = require("console")
const {readFile, writeFile} = require(`fs`)
console.log(`start`)

readFile(`./content/first.txt`,'utf8',(err,result)=> {
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result;
    readFile(`./content/first.txt`,`utf8`,(err,result)=> {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(`./content/result-asyn.txt`,
        `Here is the result : ${first}, ${second}`,
      (err,result)=> {
        if(err){
            console.log(err)
            return
        }
        // console.log(result)
        console.log(`done with the task`)
      })
    })
})
console.log(`starting the next one`)

// op

/* start
starting the next one
done with the task */