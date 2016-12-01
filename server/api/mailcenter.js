'use static'

var nodemailer = require('nodemailer');

var mailCenter = {
	init:init,
	sendOrder:sendOrder
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
}

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

	//TODO: REMOVE THIS LATER
	var body = JSON.stringify({'body test':'does this work?'}, null, 4)

	console.log(body);

	MAIL.mailOptions = {
		from: 'ian@ah-nuts.com', // sender address
		to: 'ian@ah-nuts.com', //'data.email', // list of receivers
		subject: 'Order Confirmation', // Subject line
		text: 'testing'//.plainText, // plaintext body
		//html: body.htmlText // html body
	};

	//return a promise
	return new Promise(function(resolve, reject) {

		var transporter = nodemailer.createTransport(MAIL.smtpConfig);

		console.log(transporter._options);

		transporter.sendMail(MAIL.mailOptions, function(error, info){
		    if(error){
		        console.log('error', error);
		    }
		    console.log('Message sent: ' + info.response);
		});

	});

}

module.exports = mailCenter;