'use static'

var square = {
	runCC: runCC
};

//public methods
function runCC() {

	return new Promise(function(resolve, reject) {
		resolve('done with CC');
	});

}

module.exports = square;