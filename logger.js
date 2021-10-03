// we want to make an http request to this url
var url = 'http://mylogger.io/log';

function log(message)
{
    console.log(message);
    //implement http request later
}

//we need to make 'log' public so that app.js can use it
//note how module's exports array is empty? 
//let's change that

//export the log function to module, it is public
module.exports.log = log; 


//head back to app.js