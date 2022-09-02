const EventEmitter = require(`events`)

const customEmitter = new EventEmitter()

customEmitter.on('responce',(name,id)=>{
    console.log('data received')
})

customEmitter.on(('response'),()=>{
    console.log('some other logic here')
})
customEmitter.emit('response','john',34)
