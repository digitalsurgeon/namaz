// author: Ahmad Mushtaq <ahmad.mushtaq@gmail.com
function CountDown() {	
	window.countDown = this
}

CountDown.prototype={
	start:function(targetTime, handler) {
		this.handler = handler
		this.targetTime = targetTime		
		this.intervalId = window.setInterval(this.ticker,1000)
	},
	stop:function() {
		clearInterval(this.intervalId)
	},
	ticker:function(e) {
		if (window.countDown.handler!=null) {
			
			var currentTime = new Date()
			var diff = window.countDown.targetTime - currentTime
			
			var secs = diff / 1000			
			var hours = Math.floor(secs / (60 * 60));
	
			var divisor_for_minutes = secs % (60 * 60);
			var minutes = Math.floor(divisor_for_minutes / 60);
		
			var divisor_for_seconds = divisor_for_minutes % 60;
			var seconds = Math.ceil(divisor_for_seconds);
		
			var obj = {
				"h": (hours >= 0 ? hours : 0),
				"m": (minutes >= 0 ? minutes : 0),
				"s": (seconds >= 0 ? seconds : 0)
			};			
			
			if (currentTime.getTime() >= window.countDown.targetTime.getTime()) {			
				window.countDown.stop()				
			}
			
			window.countDown.handler(obj)

		}
	}
}