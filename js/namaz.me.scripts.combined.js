function Adhan(){this.audioElement=null,this.adhanComplete=null,this.supportsAudio=!1,this.mediaPath="js/adhan_sound_files/",this.mediaFiles=["Adhan_AlAqsa","Adhan_AlAqsa"],this.mediaExtension="ogg",this.errorHandler=null,this.determineTheFileExtensionToUse()}function Settings(){this.s=new Array,this.load()}function Adhan(){this.audioElement=null,this.adhanComplete=null,this.supportsAudio=!1,this.mediaPath="js/adhan_sound_files/",this.mediaFiles=["Adhan_AlAqsa","Adhan_AlAqsa"],this.mediaExtension="ogg",this.errorHandler=null,this.determineTheFileExtensionToUse()}function getCookie(theName){var nameEQ=theName+"=",ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" ")c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return null}function setCookie(theName,theValue,theDays){theDays*=24,setCookieForHours(theName,theValue,theDays)}function setCookieForHours(theName,theValue,theHours){var date=new Date;date.setFullYear(date.getFullYear()+1);var expires="; expires="+date.toGMTString();document.cookie=theName+"="+theValue+expires+"; path=/"}function getCookieOrDefault(name,defVal){var val=getCookie(name);return val?val:defVal}function locationInfo(){this.latitude=0,this.longitude=0,this.city="",this.country=""}function getLocationInfo(){var temp=getCookie("locInfo");if(temp==null)return null;var tempArray=temp.split("="),locInfo=new locationInfo;return locInfo.latitude=tempArray[0],locInfo.longitude=tempArray[1],locInfo.city=tempArray[2],locInfo.country=tempArray[3],locInfo}function saveLocationInfo(latitude,longitude,city,county){var locInfo=latitude.toString()+"="+longitude.toString()+"="+city+"="+country;setCookieForHours("locInfo",locInfo,1)}function resetToDefault(){setCookieForHours("calculationMethod","Makkah",365),setCookieForHours("midNightMethod","Standard",365),setCookieForHours("higherLatitudeMethod","AngleBased",365),setCookieForHours("asrMethod","Standard",365),setCookieForHours("lang","en",365)}function getCalculationMethod(){var value=getCookie("calculationMethod");return value==null&&(value="Makkah"),value}function getHigherLatitudeMethod(){var value=getCookie("higherLatitudeMethod");return value==null&&(value="AngleBased"),value}function getAsrMethod(){var value=getCookie("asrMethod");return value==null&&(value="Standard"),value}function getMidNightMethod(){var value=getCookie("midNightMethod");return value==null&&(value="Standard"),value}function getLang(){var val=getCookie("lang");return val==null&&(val="en"),val}function Locale(settings){this.dir="ltr",this.settings=settings,this.handler=null,this.localize(),this.ready=!1}function CountDown(){window.countDown=this}Adhan.prototype={determineTheFileExtensionToUse:function(){if(this.audioElement===null)try{this.audioElement=new Audio}catch(e){return}var deviceAgent=navigator.userAgent.toLowerCase(),isiOS=deviceAgent.match(/(iphone|ipod|ipad)/)?!0:!1;if(isiOS)return;if(this.audioElement.canPlayType){var canPlayMp3=!!this.audioElement.canPlayType&&""!=this.audioElement.canPlayType("audio/mpeg"),canPlayOgg=!!this.audioElement.canPlayType&&""!=this.audioElement.canPlayType('audio/ogg; codecs="vorbis"');this.supportsAudio=canPlayMp3||canPlayOgg;if(this.supportsAudio){canPlayMp3&&(this.mediaExtension="mp3");for(var file in this.mediaFiles)this.mediaFiles[file]=this.mediaPath+this.mediaFiles[file]+"."+this.mediaExtension}}},installAdhanOverHandler:function(aHandler){this.audioElement.addEventListener("ended",aHandler)},installAdhanErrorHandler:function(h){this.errorHandler=h},play:function(aSource){this.supportsAudio&&(this.audioElement.src=aSource,this.audioElement.load(),this.audioElement.play())},pause:function(){this.supportsAudio&&this.audioElement.pause()},playFajrAdhan:function(){this.play(this.mediaFiles[0])},playAdhan:function(){this.play(this.mediaFiles[1])}},Settings.prototype={load:function(){this.resetToDefaults(),this.s.playAdhan=getCookieOrDefault("playAdhan",this.s.playAdhan),this.s.calculationMethod=getCookieOrDefault("calculationMethod",this.s.calculationMethod),this.s.midNightMethod=getCookieOrDefault("midNightMethod",this.s.midNightMethod),this.s.higherLatitudeMethod=getCookieOrDefault("higherLatitudeMethod",this.s.higherLatitudeMethod),this.s.asrMethod=getCookieOrDefault("asrMethod",this.s.asrMethod),this.s.lang=getCookieOrDefault("lang",this.s.lang)},saveSetting:function(name,val){setCookieForHours(name,val,365)},resetToDefaults:function(){this.s.playAdhan=!0,this.s.calculationMethod="Makkah",this.s.midNightMethod="Standard",this.s.higherLatitudeMethod="AngleBased",this.s.asrMethod="Standard",this.s.lang="en"},playAdhan:function(){return this.s.playAdhan},calculationMethod:function(){return this.s.calculationMethod},midNightMethod:function(){return this.s.midNightMethod},higherLatitudeMethod:function(){return this.s.higherLatitudeMethod},asrMethod:function(){return this.s.asrMethod},lang:function(){return this.s.lang}},Adhan.prototype={determineTheFileExtensionToUse:function(){if(this.audioElement===null)try{this.audioElement=new Audio}catch(e){return}var deviceAgent=navigator.userAgent.toLowerCase(),isiOS=deviceAgent.match(/(iphone|ipod|ipad)/)?!0:!1;if(isiOS)return;if(this.audioElement.canPlayType){var canPlayMp3=!!this.audioElement.canPlayType&&""!=this.audioElement.canPlayType("audio/mpeg"),canPlayOgg=!!this.audioElement.canPlayType&&""!=this.audioElement.canPlayType('audio/ogg; codecs="vorbis"');this.supportsAudio=canPlayMp3||canPlayOgg;if(this.supportsAudio){canPlayMp3&&(this.mediaExtension="mp3");for(var file in this.mediaFiles)this.mediaFiles[file]=this.mediaPath+this.mediaFiles[file]+"."+this.mediaExtension}}},installAdhanOverHandler:function(aHandler){this.audioElement.addEventListener("ended",aHandler)},installAdhanErrorHandler:function(h){this.errorHandler=h},play:function(aSource){this.supportsAudio&&(this.audioElement.src=aSource,this.audioElement.load(),this.audioElement.play())},pause:function(){this.supportsAudio&&this.audioElement.pause()},playFajrAdhan:function(){this.play(this.mediaFiles[0])},playAdhan:function(){this.play(this.mediaFiles[1])}},Locale.prototype={localize:function(lang){this.ready=!1,lang||(lang=this.settings.lang()),$.ajax({url:"js/langjs/"+lang+".json",dataType:"json",success:this.handleFile,error:this.handleError,locale:this})},setDirection:function(aLang){aLang==="ar"||aLang==="ur"||aLang==="fr"?this.dir="rtl":this.dir="ltr",$("#content").attr("dir",this.dir)},handleError:function(r,ts){this.locale.ready=!1},handleFile:function(o){this.locale.ready=!0,this.locale.strings=o,this.locale.handler!==null&&this.locale.handler(),this.locale.localizeStrings()},localizeStrings:function(){var strings=this.strings;$('span[id^="l\\."],div[id^="l\\."]').each(function(){var e=$(this),id=$(this).attr("id");strings[id]&&e.html(strings[id])})},getString:function(id){return this.strings[id]},installLocaleReadyHandler:function(handler){this.handler=handler}},CountDown.prototype={start:function(targetTime,handler){this.handler=handler,this.targetTime=targetTime,this.intervalId=window.setInterval(this.ticker,1e3)},stop:function(){clearInterval(this.intervalId)},ticker:function(e){if(window.countDown.handler!=null){var currentTime=new Date,diff=window.countDown.targetTime-currentTime,secs=diff/1e3,hours=Math.floor(secs/3600),divisor_for_minutes=secs%3600,minutes=Math.floor(divisor_for_minutes/60),divisor_for_seconds=divisor_for_minutes%60,seconds=Math.ceil(divisor_for_seconds),obj={h:hours>=0?hours:0,m:minutes>=0?minutes:0,s:seconds>=0?seconds:0};currentTime.getTime()>=window.countDown.targetTime.getTime()&&window.countDown.stop(),window.countDown.handler(obj)}}}
