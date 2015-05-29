module.exports = function bodyParser(app) {
	var bodyParser = require('body-parser');
	var morgan = require('morgan');
	app.use(bodyParser.urlencoded({
		extended : true
	}));
	app.use(bodyParser.json());
	app.use(morgan("dev"));
};
