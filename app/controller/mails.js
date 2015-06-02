var mails = {
	schedule : function(req, res) {

		var validate = true;
		validate = validateMail(req);
		if ( !validate ) {
			var Agenda = require('../components/Agenda');
			var agenda = new Agenda();
			agenda.schedule(req);
			res.status(201).send({
				'message' : "Sucesso email enviado",
				"req" : req.body
			});
		}else{
			res.status(403).send({'message': validate,"req":req.body});
		}
	}
};
function validateMail(req) {
	var to = req.body.to || '';
	var body = req.body.body || '';
	var subject = req.body.subject || '';
	if (to == '') {
		return "Parametro 'to' invalido. " + to;

	}
	if (subject == '') {
		return "Parametro 'subject' invalido. " + subject;

	}
	if (body == '') {
		return "Parametro 'body' invalido. " + body;

	}
	return false;
}

module.exports = mails;