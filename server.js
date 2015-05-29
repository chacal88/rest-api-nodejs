var path = require('path');
global.appRoot = path.resolve(__dirname);

require(appRoot + '/config/configure.js');

var app = require(appRoot + '/lib/app');

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});