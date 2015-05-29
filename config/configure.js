module.exports = function Configure( app ) {
	app.set('constants', appRoot + '/constants');
	app.set('config', appRoot + '/config');
	app.set('controller', appRoot + '/controller');
	app.set('model', appRoot + '/model');
	app.set('routes', appRoot + '/routes');
	app.set('lib', appRoot + '/lib');
};
