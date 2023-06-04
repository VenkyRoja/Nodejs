const EventEmitter = require('events');
const emitter = new EventEmitter;

//Register a listener
emitter.on('logging', (eventArg) => {
    console.log('Listner2 called', eventArg);
})

const log = require('./events4logger');
log('I am well!');