module.exports = function() {
	var Agenda = require('agenda');
	var dbconst = require('../constants/db');
	this.agenda = new Agenda({
		db : {
			address : dbconst.HOST + ':' + dbconst.PORT + '/' + dbconst.DBNAME
		}
	});
	this.schedule = function(req) {
		return this.agenda.now('send email report', req.body);
	};
};