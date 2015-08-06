requirejs.config({
	'baseUrl': 'scripts',
	'paths': {
		'jquery': './lib/jquery/jquery'
	}
});

requirejs(['jquery', '../main'], function ($, main) {
    $('body').css('background-color', '#dddddd');
});
