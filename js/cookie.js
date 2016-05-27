// code from: http://blemble.com/2009/04/setting-and-getting-cookies-with-javascript/
// This function will get a cookie from the users' machine
function getCookie(theName) {
var nameEQ = theName + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
function setCookie(theName, theValue, theDays) {
theDays = theDays * 24;
setCookieForHours ( theName, theValue, theDays );
}
function setCookieForHours(theName, theValue, theHours){
if (theHours) {
var date = new Date();
date.setTime(date.getTime()+(theHours*60*60*1000));
var expires = "; expires="+date.toLocaleString();
}
else var expires = "";
document.cookie = theName+"="+theValue+expires+"; path=/";
}
function getCookieOrDefault(name,defVal){
var val=getCookie(name)
if (val) return val
return defVal
}

function locationInfo(){
	this.latitude = 0;
	this.longitude = 0;
	this.city = "";
	this.country = "";
}
function getLocationInfo(){
	var temp = getCookie('locInfo');
	if (temp == null)
		return null;
	
	var tempArray = temp.split ('=');
	var locInfo = new locationInfo();
	locInfo.latitude = tempArray [0];
	locInfo.longitude = tempArray[1];
	locInfo.city = tempArray[2];
	locInfo.country = tempArray[3];
	return locInfo;
}
function saveLocationInfo( latitude, longitude, city, county ){
	var locInfo = latitude.toString() + '=' + longitude.toString() + '='
		+ city + '=' + country;
		
	setCookieForHours ( 'locInfo', locInfo, 1 );
}
function resetToDefault(){
	setCookie('calculationMethod','Makkah',365);
	setCookie('midNightMethod','Standard',365);
	setCookie('higherLatitudeMethod','AngleBased',365);
	setCookie('asrMethod','Standard',365);
	setCookie('lang','en',365);
}

function getCalculationMethod(){
	var value = getCookie('calculationMethod');
	if (value == null) value = 'Makkah';
	return value;
}
function getHigherLatitudeMethod(){
	var value = getCookie('higherLatitudeMethod');
	if (value == null) value = 'AngleBased';
	return value;
}
function getAsrMethod(){
	var value = getCookie('asrMethod');
	if (value == null) value = 'Standard';
	return value;
}
function getMidNightMethod(){
	var value = getCookie('midNightMethod');
	if (value == null ) value = 'Standard';
	return value;
}
function getLang() {
	var val=getCookie('lang')
	if(val==null)val='en'
	return val
}
