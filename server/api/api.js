'use strict'

var fs = require('fs');
var path = require('path');
var fetch = require('node-fetch');
var usps = require('usps-web-tools-node-sdk');
var square = require('./square');
var mailcenter = require('./mailcenter');
var unirest = require('unirest');

//TODO: REMOVE THIS LATER


var api = {
	_get:_get,
	_prepPostageXMLContext:_prepPostageXMLContext,
	init:init,
	zipCheck: zipCheck,
	chargeCard:chargeCard, 
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

function _prepPostageXMLContext(params) {
	
	var totalOzs = params.qty * 6;
	var weight = {
		pounds: (totalOzs - (totalOzs % 16)) / 16,
		ounces: totalOzs % 16
	}

	return {
				package: 
					[
						{
							service: "PRIORITY",
							pounds: weight.pounds,
							ounces: weight.ounces,
							zipOrigination: params.start,
							zipDestination: params.end,
							size: 'Large',
							girth: 5,
							width: 5,
							length: 5,
							height: 5
						}
					]
			}
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

function chargeCard(params) {

	var base_url = "https://connect.squareup.com/v2";
	
	console.log(params, process.env.SQUARE_SANDBOX_APP_TOKEN);
	
	return new Promise(function(resolve, reject) {

		//first get the list of locations
		unirest.get(base_url + '/locations')
		.headers({
			'Authorization': 'Bearer ' + process.env.SQUARE_SANDBOX_APP_TOKEN,
			'Accept': 'application/json'
		})
		.end(function(response) {

			var token = require('crypto').randomBytes(64).toString('hex');

			var request_body = {
				card_nonce: params.nonce,
				amount_money: {
					amount: 2000,
					currency: 'USD'
				},
				idempotency_key: token
			}

			//if we got a good response, send the acutal request
			unirest.post(base_url + '/locations/' + 'CBASECj4vA2gWFe7i9yDyiz6pfE' + '/transactions')
			.headers({
				'Authorization': 'Bearer ' + process.env.SQUARE_SANDBOX_APP_TOKEN,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			})
			.send(request_body)
			.end(function(response) {
				if(response.body.errors) {
					reject({status: 400, errors: response.body.errors});
				} else {
					resolve({status: 200, data: response.body});
				}
			});

		});

	});

}

function postageCalculator(params) {

	console.log('calculating Postage', params);

	//1. FIRST CHECK FOR PRIORITY
	//2. THEN CHECK FOR EXPRESS
	
	var data = _prepPostageXMLContext(params);

	return new Promise(function(resolve, reject) {
 
		usps.rateCalculator.rate(data, function(error, response) {
			if(error) {
				reject(error);
			} else {
				resolve(JSON.stringify(response));
			}
		});
		//resolve('postageCalculator worked');
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