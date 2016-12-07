'use strict'

var fs = require('fs');
var path = require('path');
var fetch = require('node-fetch');
var usps = require('usps-web-tools-node-sdk');
var square = require('./square');
var mailcenter = require('./mailcenter');

//TODO: REMOVE THIS LATER


var api = {
	_get:_get,
	init:init,
	zipCheck: zipCheck, 
	postageCalculator:postageCalculator,
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

function postageCalculator(data) {

	console.log('calculating Postage');

	return new Promise(function(resolve, reject) {

		usps.rateCalculator.rate(data, function(error, response) {
			if(error) {
				reject(error);
			} else {
				resolve(JSON.stringify(response));
			}
		});
	});

}

function processOrder(data) {

	//console.log('processing the order', data);

	//data = {'testin':'go'};

	//return a promise
	return new Promise(function(resolve, reject) {

		//check for errors

		//1. process payment
		square.runCC(data).then(function(response) {

			//2. mail request to Ah-Nuts
			mailcenter.sendOrder(data).then(function(response) {

				//3. if everything worked mail receipt to customer
				mailcenter.sendReceipt(data).then(function(response) {

					//return success message
					resolve({'good': 'everything worked'});

				//.3 catch
				}).catch(function(error) {

					reject(error);

				});

			//2. catch
			}).catch(function(error) {

				reject(error);

			});

		//1. catch
		}).catch(function(error) {

		});
		
	});

}

module.exports = api;