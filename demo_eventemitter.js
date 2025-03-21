var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an event holder
var myEventHandler = function (){
    console.log('I hear a scream');
}
//Assign the event handler vto an event 
eventEmitter.on('scream', myEventHandler);
//Fire the scream
eventEmitter.emit('scream');