'use strict'

var fs = require('fs');
var path = require('path');
var fetch = require('node-fetch');
var usps = require('usps-web-tools-node-sdk');

//TODO: REMOVE THIS LATER


var api = {
	_get:_get,
	init:init,
	zipCheck: zipCheck
};

function init() {

	//initialize usps
	usps.configure({ userID: process.env.USPS_ID });
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

module.exports = api;