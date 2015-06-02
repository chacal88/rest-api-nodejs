module.exports = function routes( router , app) {	
	app.all( app.get('domain') + '/'+ app.get('version') + '/private/*', [ require( appRoot + '/lib/middleware/validateRequest' ) ]);
	
	var appConst = require( app.get('constants') + '/app');
	var mails = require(app.get('controller') + '/mails.js');
	
	/**
	 * Routes that can be accessed by any one
	 */
	//router.post( '/' + appConst.DOMAIN + '/' + appConst.VERSION + '/public/login', auth.login);
	router.post( '/' + appConst.DOMAIN + '/' + appConst.VERSION + '/public/mails' , mails.schedule );
	

	/**
	 * Routes that can be accessed only by autheticated users
	 */
//	router.get( appConst.DOMAIN + '/' + appConst.VERSION + '/private' + '/products' , products.getAll );
//	router.get( appConst.DOMAIN + '/' + appConst.VERSION + '/private' + '/:id' , products.getOne );
//	router.post( appConst.DOMAIN + '/' + appConst.VERSION + '/private' + '/' , products.create );
//	router.put ( appConst.DOMAIN + '/' + appConst.VERSION + '/private' + '/:id' , products.update );
//	router.delete( appConst.DOMAIN + '/ '+ appConst.VERSION + '/private' + '/:id' , products.delete );
	/**
	 * Routes that can be accessed only by authenticated & authorized users
	 */
//	router.get( appConst.DOMAIN + '/'+ appConst.VERSION + '/private' + '/admin/users', user.getAll );
//	router.get( appConst.DOMAIN + '/'+ appConst.VERSION + '/private' + '/user/:id', user.getOne );
//	router.post('/' + appConst.DOMAIN + '/'+ appConst.VERSION + '/public' + '/user', user.create );
//	router.put( appConst.DOMAIN + '/'+ appConst.VERSION + '/private' + '/user/:id', user.update );
//	router.delete( appConst.DOMAIN	+ '/'+ appConst.VERSION + '/private' + '/user/:id', user.delete );
//	
	
	return router;
};