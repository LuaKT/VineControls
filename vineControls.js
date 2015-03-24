//Watch for video element
$( document ).on( "DOMNodeInserted", function( e ) {
	if (e.target.className == "ember-view vine-player") {
		run(e.target);
	}
});

//Load volume or use 50% default
var volume = localStorage.vineVolume || 0.5;
	
function run (target) {
	// Grab video element
	var video = $(target).find("video")[0];

	//Show Controls on load
	video.controls = true;

	//Set volume on load
	video.volume = volume;

	//Volume update
	video.addEventListener('volumechange', function(e) {
		volume = video.volume;
		localStorage["vineVolume"] = video.volume;
	}, false);
}