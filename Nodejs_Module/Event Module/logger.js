const EventEmitter = require("events");
// const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // ! Trigger the event
    this.emit("connectionWithArgs", { id: 1, message: "hello" });
  }
}

module.exports = Logger;
