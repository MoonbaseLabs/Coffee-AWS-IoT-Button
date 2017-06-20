var request = require('request');

exports.handler = function(event, context) {

	var postJsonBody = determineClickEvent(event);
	
	function determineClickEvent(event){
		if (event.clickType === 'SINGLE'){
			return(':coffee: is brewed! Come get a cup!');
		}
		if (event.clickType === 'DOUBLE'){
			return(':coffee: is all gone :(!');
		}
		if (event.clickType === 'LONG'){
			return('Nitro Joes is out!');
		}
	};

	request.post(
	'https://hooks.slack.com/services/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',
		{ json: { text: postJsonBody} },
		function (error, response, body) {
		}
	);
}
