module.exports = function CallBack( app ) {
	app.use(function(req, res, next) {
		console.log("Not Found Route");
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});
};
