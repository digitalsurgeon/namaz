var buildify=require("buildify")

buildify()
	.setDir("js/")
	.concat(["adhan.js","settings.js","adhan.js","cookie.js","localize.js","timecountdown.js"])
	.uglify()
	.save("namaz.me.scripts.combined.js")