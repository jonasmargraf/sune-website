$('document').ready(function() {

// 	var options = { videoId: 'EwY_X-RqlWs' };
// 	$('#wrapper').tubular(options);
// });

	if (window.matchMedia("(min-width: 769px)").matches) {
			$("#wrapper").tubular({ videoId: 'EwY_X-RqlWs' });
	}
	
	else {
		$("body").prepend($(<img id="background" src="media/background.jpg">));
	}
});