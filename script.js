function showClock(ms) {
	var date2 = new Date();
	var ms2 = date2.getTime();
	var date = new Date(ms2 - ms + date2.getTimezoneOffset()*60000);

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if(hours < 10) { hours = '0' + hours; }
	if(minutes < 10) { minutes = '0' + minutes; }
	if(seconds < 10) { seconds = '0' + seconds; }

	document.body.innerHTML = hours+':'+minutes+':'+seconds;
}
 
window.onload = function() {
	var date = new Date();
	var ms = date.getTime();

	setInterval(function() {
		showClock(ms);
	}, 1000);
};
