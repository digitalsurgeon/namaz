// author: Ahmad Mushtaq <ahmad.mushtaq@gmail.com
function Adhan() {
	// this hold the HTML element used.
	this.audioElement = null;
	
	// event handler when the adhan is complete
	this.adhanComplete = null;
	
	// used to keep the result of wether the browser supports HTML5 Audio
	this.supportsAudio = false;
	
	// the location where the adhan files are stored.
	this.mediaPath = "js/adhan_sound_files/";
	
	// the file names, without the extension. this extension will be either .mp3 or .ogg
	// depending on the browser.
	this.mediaFiles = ["Adhan_AlAqsa", "Adhan_AlAqsa"];
	
	// Mp3 is preferred over Ogg.
	this.mediaExtension = "ogg";
	
	// called in case unable to play adhan
	this.errorHandler = null;
	
	// start the browser detection process.
	this.determineTheFileExtensionToUse();
}

Adhan.prototype = {
    // we try to determine which files to use for web audio, mp3 or ogg.
    // some browsers support only ogg, some only mp3, so we need to get the
    // correct file for the browser.
	determineTheFileExtensionToUse: function() {
		if (this.audioElement === null) {
			try {
				this.audioElement = new Audio();
			}
			catch (e) {
				return;
			}
		}
		
		// if any of the iOS devices.
        var deviceAgent = navigator.userAgent.toLowerCase();
        var isiOS = deviceAgent.match(/(iphone|ipod|ipad)/) ? true : false;
		if (isiOS) {
			// although iOS supports web audio, but it will not play until user performs some ui interaction.
			// so useless for us.
			return;
		}
		
		if (this.audioElement.canPlayType) {		
			// Currently canPlayType(type) returns: "", "maybe" or "probably";
			var canPlayMp3 = !!this.audioElement.canPlayType && "" != this.audioElement.canPlayType('audio/mpeg');
			var canPlayOgg = !!this.audioElement.canPlayType && "" != this.audioElement.canPlayType('audio/ogg; codecs="vorbis"');
			
			this.supportsAudio = canPlayMp3 || canPlayOgg;
			
			// We prefer Mp3 over Ogg
			if (this.supportsAudio) {
				if (canPlayMp3) {
					this.mediaExtension = "mp3";
				}
				
                // build complete paths, and store them in the array
                // mediaPath configured above + name of the adhan file + extension we just decided to use.
                for (var file in this.mediaFiles) {
                    this.mediaFiles[file] = this.mediaPath + this.mediaFiles[file] + "." + this.mediaExtension;
                }
			}
		}
	},
	installAdhanOverHandler:function (aHandler) {
		this.audioElement.addEventListener("ended", aHandler);
	},
	installAdhanErrorHandler:function(h) {
		this.errorHandler=h;
	},
	play:function(aSource) {
		if (this.supportsAudio) {
			this.audioElement.src = aSource;
			this.audioElement.load();
			this.audioElement.play();
		}
	},
	pause:function() {
		if (this.supportsAudio) {
			this.audioElement.pause();
		}
	},
	playFajrAdhan:function() {	
		this.play(this.mediaFiles[0]);
	},
	playAdhan:function() {
		this.play(this.mediaFiles[1]);
	}
};