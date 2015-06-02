var Agenda = require('agenda');
var dbconst = require( '../config/db');
var connectionOpts = {
	db : {
		address : dbconst.HOST + ':' + dbconst.PORT + '/' + dbconst.DBNAME
	},
	processEvery: '3 seconds',
	defaultLockLifetime: 10,
	maxConcurrency: 20,
	defaultConcurrency: 5,
	defaultLockLifetime: 10000
};
var agenda = new Agenda(connectionOpts);

var jobTypes = process.env.JOB_TYPES ? process.env.JOB_TYPES.split(',') : [];

jobTypes.forEach(function(type) {
	require('../lib/jobs/' + type)(agenda);
})

if (jobTypes.length) {
	console.log("iniciando");
	agenda.start();
}
module.exports = agenda;