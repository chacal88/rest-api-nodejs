module.exports = function Configure( app ) {
	app.set('constants', appRoot + '/app/constants');
	app.set('config', appRoot + '/app/config');
	app.set('controller', appRoot + '/app/controller');
	app.set('model', appRoot + '/app/model');
	app.set('routes', appRoot + '/app/routes');
	app.set('lib', appRoot + '/lib');
};
