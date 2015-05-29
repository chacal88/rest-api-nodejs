var express = require('express');
var app = express();

var config = require( appRoot + "/config/configure");
new config( app );

var db = require(app.get('lib') + "/app/db");
new db( app );


var header = require(app.get('lib') + "/app/header");
new header( app );

var bodyParser = require(app.get('lib') + "/app/bodyParser");
new bodyParser( app );

app.all( app.get('domain') + '/'+ app.get('version') + '/*', [ require( appRoot + '/middleware/validateRequest' ) ]);

var router = require( app.get('routes') );
app.use('/', new router( express.Router() , app ));

var calback = require(app.get('lib') + "/app/callback");
new calback( app );

app.set( 'port' , app.get('port') || 3000);
module.exports = app;