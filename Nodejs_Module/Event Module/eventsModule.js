// const EventEmitter = require('events');
// const emitter = new EventEmitter();

//const log = require('./logger');
const Logger = require('./logger');
const logger = new Logger();



// ! Register listener
logger.on('connection', function(){
    console.log('Bağlantı kuruldu');
});

logger.on('logout', function(){
    console.log('Bağlantı koptu');
});

logger.on('connectionWithArgs', function(args){
    console.log('Bağlantı kuruldu. Message : '+ args.message);
});


// // ! Trigger the event
// emitter.emit('connectionWithArgs', {id: 1, message:'hello'} );

logger.log('Gökhan Birkin login oldu');

