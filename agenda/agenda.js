var Agenda = require('agenda');
var dbconst = require( '../app/constants/db');

var connectionOpts = {
	db : {
		address : dbconst.HOST + ':' + dbconst.PORT + '/' + dbconst.DBNAME
	},
	processEvery: '3 seconds',
	defaultLockLifetime: 10
};
var agenda = new Agenda(connectionOpts);

agenda.define('send email report', function(job, done) {
	var data = job.attrs.data;
	// Enviando e-mails usando o Node.js e o famoso nodemailer
	var nodemailer = require('nodemailer');
	 
	// Vamos criar a conta que irá mandar os e-mails
	var conta = nodemailer.createTransport({
	    service: 'Gmail', // Existem outros services, você pode procurar
	                      // na documentação do nodemailer como utilizar
	                      // os outros serviços
	    tls: {
	        rejectUnauthorized: false
	    },
	    auth: {
	        user: 'kauemsc@gmail.com', // Seu usuário no Gmail
	        pass: 'ReiXXT00' // A senha da sua conta no Gmail :-)
	    }
	});
	 
	conta.sendMail({
	    from: 'Kaue Santos <kauemsc@gmail.com>', // Quem está mandando
	    to: 'Alan Hoffmeister <'+data.to+'>', // Para quem o e-mail deve chegar
	    subject: 'Estou testando seu gist', // O assunto
	    html: '<strong>Oi Alan!</strong><p>Estou testando seu gist para enviar e-mails, amo você!</p>', // O HTMl do nosso e-mail
	}, function(err){
	    if(err)
	        console.log(err);
	 
	    console.log('E-mail enviado!');

	});
});
console.log("inicio");
	agenda.start();
