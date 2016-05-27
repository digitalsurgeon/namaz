// author: Ahmad Mushtaq <ahmad.mushtaq@gmail.com
// make sure cookie.js is included b4 this file
function Settings() {
	this.s = new Array()
	this.load()
}
Settings.prototype={
	load:function(){
		this.resetToDefaults()
		this.s.playAdhan=getCookieOrDefault("playAdhan",this.s.playAdhan)
		this.s.calculationMethod=getCookieOrDefault("calculationMethod",this.s.calculationMethod)
		this.s.midNightMethod=getCookieOrDefault("midNightMethod",this.s.midNightMethod)
		this.s.higherLatitudeMethod=getCookieOrDefault("higherLatitudeMethod",this.s.higherLatitudeMethod)
		this.s.asrMethod=getCookieOrDefault("asrMethod",this.s.asrMethod)
		this.s.lang=getCookieOrDefault("lang",this.s.lang)
	},
	saveSetting:function(name,val){
		setCookie(name,val,365)
	},
	resetToDefaults:function(){
		this.s.playAdhan=true
		this.s.calculationMethod="Makkah"
		this.s.midNightMethod="Standard"
		this.s.higherLatitudeMethod="AngleBased"
		this.s.asrMethod="Standard"
		this.s.lang="en"
	},
	playAdhan:function(){
		return this.s.playAdhan
	},
	calculationMethod:function() {
		return this.s.calculationMethod
	},
	midNightMethod:function(){
		return this.s.midNightMethod
	},
	higherLatitudeMethod:function(){
		return this.s.higherLatitudeMethod
	},
	asrMethod:function(){
		return this.s.asrMethod
	},
	lang:function(){
		return this.s.lang
	}
};