var config = require('../../config/config');
module.exports = function(agenda) {
	var nodemailer = require('nodemailer');
	agenda.define('send email basic', function(job, done) {
		console.log("Send Email Basic")
		var data = job.attrs.data;
		var conta = nodemailer.createTransport({
			service : config.SERVICE,
			tls : {
				rejectUnauthorized : false
			},
			auth : {
				user : config.USER,
				pass : config.PASS
			}
		});
		conta.sendMail({
			from : config.NAMEFROM + ' <'+ config.MAIL +'>',
			to : data.name + ' <' + data.to + '>',
			subject : data.subject,
			html : data.body,
		}, function(err) {
			if (err)
				console.log(err);
			console.log('E-mail enviado!');
			done();
		});

	});
}