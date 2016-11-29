
//declare dependencies
var express = require('express');
var bodyParser = require('body-parser');

//define the app
var app = express();

//define the port
var port = process.env.PORT || 3000;

//get the URL encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//define our body parsers
app.use(jsonParser); // for parsing application/json
app.use(urlencodedParser); // for parsing application/x-www-form-urlencoded

//tell it the folder to serve
app.use(express.static('dist'));

//open the port for local development
app.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
	console.log('Running in ' + process.env.NODE_ENV + ' environment');
});

//export the module
module.exports = app;