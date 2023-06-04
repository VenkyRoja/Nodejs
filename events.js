const EventEmitter = require('events');

const emitter = new EventEmitter;

//Register a listener
emitter.on('messageLogged', function(eventArg) {
    console.log('Listner called', eventArg);
})

//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://xyz.com'});