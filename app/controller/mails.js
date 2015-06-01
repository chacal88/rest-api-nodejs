var mails = {
		schedule: function ( req, res ){
			var to = req.body.to || '';
			var name = req.body.name || '';
			var subject = req.body.subject || '';
			if (to == '' || name == '' || subject == '') {
				res.status(403).send({'message':"Erro Parametro Invalido","req":req.body});
				return
			}
			
			var Agenda = require('../components/Agenda');
			var agenda = new Agenda();
			agenda.schedule( req );
			res.status(201).send({'message':"Sucesso email enviado","req":req.body});
		}
	};
module.exports = mails;