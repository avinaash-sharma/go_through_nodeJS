const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(message){
        this.emit('message', {id: uuid.v4(), message});
        this.emit('message2', {id: uuid.v4(), message});
        this.emit('message3', {id: uuid.v4(), message});
        this.emit('message4', {id: uuid.v4(), message});
    }
}



const logger = new Logger();
logger.on('message', data=>console.log('data1: ', data));

logger.log('Hello world!');
logger.log('Hello People!');
logger.log('Hello Everyone!');