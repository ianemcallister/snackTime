'use strict'

var fs = require('fs');
var path = require('path');
var fetch = require('node-fetch');
var usps = require('usps-web-tools-node-sdk');
var mailcenter = require('./mailcenter');

//TODO: REMOVE THIS LATER


var api = {
	_get:_get,
	init:init,
	zipCheck: zipCheck, 
	processOrder: processOrder
};

function init() {

	//initialize usps
	usps.configure({ userID: process.env.USPS_ID });

	//initialize 
	mailcenter.init();
}

function _get(url) {
	
	return new Promise(function(resolve, reject) {

		fetch(url).then(function(response) {

			//in sucess return response
			resolve(response);

		}).catch(function(error) {

			//if there was an error send error as rejection
			reject(error);

		});

	});

}

function zipCheck(zipcodes) {

	console.log('checking zipcode');

	return new Promise(function(resolve, reject) {
	
		usps.addressInformation.cityStateLookup(
			// a data object with the required fields
			{ zipCode: zipcodes },
			// and a callback
			function (error, response) {
				if (error) {
				  // if there's a problem, the error object won't be null
				  //console.log(error);
				  reject(error);
				} else {
				  // otherwise, you'll get a response object
				  //console.log(JSON.stringify(response));
				  resolve(JSON.stringify(response));
				}
			}
		);

	});

}

function processOrder(data) {

	//console.log('processing the order', data);

	data = {'testin':'go'};

	//return a promise
	return new Promise(function(resolve, reject) {

		//check for errors

		//process payment

		//mail request to Ah-Nuts
		mailcenter.sendOrder(data).then(function(response) {

			resolve(response);

		}).catch(function(error) {

			reject(error);
			
		});

		//mail receipt to customer

		//return success message
		resolve({'good': 'everything worked'});
	});

}

module.exports = api;