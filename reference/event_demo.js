const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {};

//init object
const myEmmitter = new MyEmitter();

//event listener
myEmmitter.on('myEvent', () => {
    console.log('event fired..');
});

//init event
myEmmitter.emit('myEvent');