

const EventEmitter = require('events');

const Logger = require('./events5logger');
const logger = new Logger();

//Register a listener
logger.on('logging', (eventArg) => {
    console.log('Listner2 called', eventArg);
})


logger.log('I am well!');