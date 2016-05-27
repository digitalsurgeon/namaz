// author: Ahmad Mushtaq <ahmad.mushtaq@gmail.com
function Locale(settings) {
	this.dir = "ltr";
	this.settings=settings;
	this.handler=null;
	this.localize();
	this.ready=false;
}
Locale.prototype={
	localize:function(lang){
		this.ready=false;
		if (!lang) lang=this.settings.lang();
		$.ajax( 
			{ 
				url: "js/langjs/"+lang+".json",
				dataType: "json",
				success: this.handleFile,
				error: this.handleError,
				locale:this
			});
		//this.setDirection(lang); //todo: this doesnt seem to make life better on Apple browsers.
	},
	setDirection:function(aLang) {
		if (aLang==="ar" || aLang==="ur" || aLang==="fr") this.dir="rtl"; else this.dir="ltr";
		$("#content").attr("dir",this.dir);
	},
	handleError:function(r, ts){
		this.locale.ready=false;
	},
	handleFile:function(o) {
		this.locale.ready=true;
		this.locale.strings=o;
		if (this.locale.handler !== null)
			this.locale.handler();
		this.locale.localizeStrings();
	},
	localizeStrings:function(){
		var strings=this.strings;
		$('span[id^="l\\."],div[id^="l\\."]').each(function() {
			var e=$(this);
			var id=$(this).attr("id");
			
			if (strings[id]) {
				e.html(strings[id]);
			}
		});
	},
	getString:function(id){
		return this.strings[id];
	},
	installLocaleReadyHandler:function(handler) {
		this.handler=handler;
	}
};
