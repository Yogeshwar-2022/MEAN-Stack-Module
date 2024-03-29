/* event module

in node js has built in module called "events "
where u can create file and listen for your own EventSource


how to identify event -> in which capital letter start like EventEmitter here E are cpital in whole word etc 
*/

const { ok } = require("assert");
const EventEmitter = require("events");
const event = new EventEmitter();

/*
// example 1 -> registering for the event to be fired only one time using once
event.on("sayMyName", () => {
  console.log("YOur name is yogeshwar");
});
event.emit("sayMyName");

// example 2-> create event emitter instance and register a couple of callbacks
event.on("sayMyName", () => {
  console.log("YOur name is yogeshwar");
});

event.on("sayMyName", () => {
  console.log("YOur name is rajesh");
});

event.on("sayMyName", () => {
  console.log("YOur name is vighnesh");
});
event.emit("sayMyName");
*/
//example 3-> registering for the event with callbacks parameters

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and page is ${msg}`);
});
event.emit("checkPage", 200, ok);
