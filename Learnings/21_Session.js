var cookieSession = require("cookie-session");
var express = require("express");
var app = express();
app.use(
	cookieSession({
		name: "session",
		keys: ["key1", "key2"],
	})
);
app.use(function (req, res, next) {
	req.sessionOptions.maxAge = 5000;
	next();
});
app.get("/", function (req, res, next) {
	if (req.session.views) {
		req.session.views++;
		res.send("No. of visits " + req.session.views);
	} else {
		req.session.views = 1;
		res.send("No. of visits " + req.session.views);
	}
});
app.listen(5050);
