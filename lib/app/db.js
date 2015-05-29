module.exports = function dB( app ) {
	var mongoose = require("mongoose");
	var dbconst = require( app.get('constants') + '/db');

	mongoose.connect('mongodb://'+dbconst.HOST+':'+ dbconst.PORT+'/'+dbconst.DBNAME);

	mongoose.connection.on('error', console.error
			.bind(console, 'connection error:'));

	mongoose.connection.once('open', function() {
		console.log("Mongo DB connected!");
	});

};