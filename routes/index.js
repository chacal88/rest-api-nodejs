module.exports = function routes( router , app) {
	
	var appConst = require( app.get('constants') + '/app');
	var auth = require(app.get('controller') + '/auth.js');
	var products = require(app.get('controller') + '/products.js');
	var user = require(app.get('controller') + '/users.js');
	 
	/*
	 * Routes that can be accessed by any one
	 */
	router.post('/login', auth.login);
	 
	/*
	 * Routes that can be accessed only by autheticated users
	 */
	router.get( appConst.DOMAIN + '/'+ appConst.VERSION +'/products', products.getAll );
	router.get( appConst.DOMAIN + '/'+ appConst.VERSION +'/product/:id', products.getOne );
	router.post( appConst.DOMAIN + '/'+ appConst.VERSION +'/product/', products.create );
	router.put ( appConst.DOMAIN + '/'+ appConst.VERSION +'/product/:id', products.update );
	router.delete( appConst.DOMAIN + '/'+ appConst.VERSION +'/product/:id', products.delete );
	/*
	 * Routes that can be accessed only by authenticated & authorized users
	 */
	router.get( appConst.DOMAIN + '/'+ appConst.VERSION +'/admin/users', user.getAll );
	router.get( appConst.DOMAIN + '/'+ appConst.VERSION +'/admin/user/:id', user.getOne );
	router.post( appConst.DOMAIN + '/'+ appConst.VERSION +'/admin/user/', user.create );
	router.put( appConst.DOMAIN + '/'+ appConst.VERSION +'/admin/user/:id', user.update );
	router.delete( appConst.DOMAIN	+ '/'+ appConst.VERSION +'/admin/user/:id', user.delete );
	return router;
};