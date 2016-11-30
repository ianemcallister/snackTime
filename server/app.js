
//declare dependencies
var express = require('express');
var bodyParser = require('body-parser');
var API = require('./API/api');

//define the app
var app = express();

//initialize api
API.init();

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

/*
*	ENDPOINTS
*/
//receives a zipcode, returns a city and state
app.get('/api/zipcheck/:zipcode', function(req, res) {

	//define local variables
	var zipcode = req.params.zipcode

	//messaging
	console.log('Got this zip', zipcode);

	//submission to method
	API.zipCheck([zipcode]).then(function(response) {

		//returning response
		res.send({
			city: response.city,
			state: response.state
		});

	}).catch(function(error) {

		//returning error
		res.send({
			error: error
		});

	});

});

//receives shipping to and from, returns shipping options
app.get('/api/shipping/', function(req, res) {

	//messaging 

});

//receives payment request, returns success or failure confirmation
app.post('/api/payment/', function(req, res) {

	//messaging 

});

//receives order details, returns submission success or failure confirmation
app.post('/api/order/', function(req, res) {

	//messaging 

});

//open the port for local development
app.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
	console.log('Running in ' + process.env.NODE_ENV + ' environment');
});

//export the module
module.exports = app;