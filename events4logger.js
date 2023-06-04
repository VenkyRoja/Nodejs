
const EventEmitter = require('events');
const emitter = new EventEmitter;

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);

    //Raise an event
    emitter.emit('logging', { data:  'How are you?'});
}

module.exports = log;