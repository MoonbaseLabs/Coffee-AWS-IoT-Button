var request = require('request');

exports.handler = function(event, context) {

	var postJsonBody = determineClickEvent(event);
	
	// Determine what click event is sent form the IoT button.
	function determineClickEvent(event){
		if (event.clickType === 'SINGLE'){
				singleClickEventItems = [
					'<!here> :coffee: is brewed! Come get a cup!',
					'<!here> Reverie coffee is brewed!',
					'<!here> Fresh covfefe ready in the break room! :wink:'
				]
				var randomSingleClickReturn = singleClickEventItems[Math.floor(Math.random()*singleClickEventItems.length)];
				return(randomSingleClickReturn);
		}
		if (event.clickType === 'DOUBLE'){
			return('<!here> Coffee pot is empty :disappointed:!');
		}
		if (event.clickType === 'LONG'){
			return('<!here> :rotating_light: Nitro Joes is out! Sound the alarm! FYI <@jaraemyerslp> - :rotating_light:' );
		}
	}

	// Post to slack bot.
	request.post(
	'https://hooks.slack.com/services/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',
		{ json: { text: postJsonBody} },
		function (error, response, body) {
		}
	);
}
