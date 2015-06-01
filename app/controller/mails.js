var mails = {
		schedule: function ( req, res ){
			var email = req.body.email || '';
			if (email == '') {
				res.status(403).send({'message':"Erro Email Invalido","req":req.body});
				return
			}
			
			var Agenda = require('../components/Agenda');
			var agenda = new Agenda();
			agenda.schedule( req );
			res.status(201).send({'message':"Sucesso email enviado","req":req.body});
		}
	};
module.exports = mails;