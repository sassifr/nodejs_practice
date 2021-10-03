const { clear } = require("console");

function helloWorld(name){
    console.log("hello world "+name);
}

//helloWorld(window); doesn't work with node
helloWorld("name");
/*
//global object (can be accessed anywhere)
console.log();
//also global - this is used to call func after a delay
setTimeout();
clearTimeout();
//also global - use to repeatedly call func after a delay
setInterval();
//stops repeating the func
clearInterval();

//^these all belong to "window" object normally
// but they belong to global in node.js

//message exists within the scope of this file
// it is NOT added to the global object
var message = "what";
//dont make global vars/funcs usually
*/
// we have a modular structure, where funcs within a file are 'private'
// accessible only by that file

//we need to export funcs(?) to make them 'public' to other files

//module is a reserved word
console.log(module);

//let's make a new module (see logger.js)

//we're back!

// ./ indicates current folder
// const is better practice for require than var
const logger = require('./logger.js'); 
//returns the export of logger ^

console.log(logger);

// now we can use functions from our exported module
logger.log("a message to log with logger");

// we can also export a function on its own
// see logger_func.js





