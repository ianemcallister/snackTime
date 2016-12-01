'use static'

var nodemailer = require('nodemailer');

var mailCenter = {
	init:init,
	sendOrder:sendOrder,
	sendReceipt: sendReceipt
};

//local variables
var MAIL = {
	HOST: '',
	PORT: '',
	USER: '',
	PASSWORD: '',
	smtpConfig: {},
	transporter: {},
	mailOptions: {}
};
var BODY = {
	text: 'Confirmation: Your Order Was Received',
	htmlText: "<h2>Confirmation</h2><p>Your Order Was received</p>"
};

//private methods


//public methods
function init() {
	//initialize env variables
	MAIL.HOST = process.env.AH_NUTS_MAIL_HOST;
	MAIL.PORT = process.env.AH_NUTS_MAIL_PORT;
	MAIL.USER = process.env.AH_NUTS_MAIL_USER;
	MAIL.PASSWORD = process.env.AH_NUTS_MAIL_PASSWORD;

	//config variable
	MAIL.smtpConfig = {
		host: MAIL.HOST,
		port: MAIL.PORT,
		secure: true, // use SSL
		auth: {
			user: MAIL.USER,
			pass: MAIL.PASSWORD			
		}
	};

	// create reusable transporter object using the default SMTP transport
	MAIL.transporter = nodemailer.createTransport(MAIL.smtpConfig);
}

function sendOrder(data) {

	//mailing to admin for fullfillment
	MAIL.mailOptions = {
		from: data.email, // sender address
		to: 'ian@ah-nuts.com', //data.email, // list of receivers
		subject: 'Order Placed', // Subject line
		text: BODY.text, //.plainText, // plaintext body
		html: BODY.htmlText // html body
	};

	//return a promise
	return new Promise(function(resolve, reject) {

		MAIL.transporter.sendMail(MAIL.mailOptions, function(error, info){
		    
		    if(error){
		    	//If there was an error, tell us about it and reject
		    	console.log('error:', error);
		        reject(error);
		    } else {
		    	//otherwise, give us info about the success
		    	console.log('info:', info);
		    	resolve(info);
		    }

		});

	});

}

function sendReceipt(data) {

	//mailing to admin for fullfillment
	MAIL.mailOptions = {
		from: 'ian@ah-nuts.com', // sender address
		to: data.email, //data.email, // list of receivers
		subject: 'Order Confirmation', // Subject line
		text: BODY.text, //.plainText, // plaintext body
		html: BODY.htmlText // html body
	};

	//return a promise
	return new Promise(function(resolve, reject) {

		MAIL.transporter.sendMail(MAIL.mailOptions, function(error, info){
		    
		    if(error){
		    	//If there was an error, tell us about it and reject
		    	console.log('error:', error);
		        reject(error);
		    } else {
		    	//otherwise, give us info about the success
		    	console.log('info:', info);
		    	resolve(info);
		    }

		});

	});

}

module.exports = mailCenter;