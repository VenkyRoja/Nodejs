const EventEmitter = require('events');

const emitter = new EventEmitter;

//Register a listener
emitter.on('logging', (eventArg) => {
    console.log('Listner2 called', eventArg);
})

//Raise an event
emitter.emit('logging', { data:  'How are you?'});