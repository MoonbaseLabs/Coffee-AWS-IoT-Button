var request = require('request');

exports.handler = function(event, context) {

	var postJsonBody = determineClickEvent(event);
	
	function determineClickEvent(event){
		if (event.clickType === 'SINGLE'){
				singleClickEventItems = [
					':coffee: is brewed! Come get a cup!',
					'Reverie coffee is brewed!',
					'Fresh covfefe ready in the break room! :wink:'
				]
				var randomSingleClickReturn = singleClickEventItems[Math.floor(Math.random()*singleClickEventItems.length)];
				return(randomSingleClickReturn);
		}
		if (event.clickType === 'DOUBLE'){
			return(':coffee: is all gone :(!');
		}
		if (event.clickType === 'LONG'){
			return('Nitro Joes is out! Sound the alarm!');
		}
	};

	request.post(
	'https://hooks.slack.com/services/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',
		{ json: { text: postJsonBody} },
		function (error, response, body) {
		}
	);
}
