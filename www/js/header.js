jQuery(document).ready(function($) {
	initUI();
});


function initUI() {
	//share option
	var description = document.getElementsByName('description')[0].getAttribute('content');
	$("#facebook a").click(function(e) {
		e.preventDefault();
		window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(location.href) + '&t=' + encodeURIComponent(document.title), 'Share us on facebook', 'toolbar=0,status=0,width=548,height=325');
		return false;
	});
	$("#twitter a").click(function(e) {
		e.preventDefault();
		window.open('http://twitter.com/home?status=' + encodeURIComponent(description) + ' ' + encodeURIComponent(location.href), 'Share us on facebook', 'toolbar=0,status=0,width=548,height=325');

		return false;
	});
	$("#google a").click(function(e) {
		e.preventDefault();
		window.open('https://plus.google.com/share?url=' + encodeURIComponent(location.href) + '&title=' + encodeURIComponent(document.title), 'Share us on facebook', 'toolbar=0,status=0,width=548,height=325');
		return false;
	});
};