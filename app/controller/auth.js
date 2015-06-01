var jwt = require('jwt-simple');
var User = require('../model/User');
var auth = {

	login : function(req, res) {
		var username = req.body.username || '';
		var password = req.body.password || '';
		if (username == '' || password == '') {
			res.status(401);
			res.json({
				"status" : 401,
				"message" : "Invalid credentials"
			});
			return;
		}

		// Fire a query to your DB and check if the credentials are valid
		
		var dbUserObj = auth.validate(username, password);
		if (!dbUserObj) { // If authentication fails, we send a 401 back
			res.status(401);
			res.json({
				"status" : 401,
				"message" : "Invalid credentials"
			});
			return;
		}

		if (dbUserObj) {

			// If authentication is success, we will generate a token
			// and dispatch it to the client
			dbUserObj = genToken(dbUserObj);
			User.save(function(err, dbUserObj) {
				res.json({
					type : true,
					data : user1,
					token : user1.token
				});
			});
			res.json();
		}

	},

	validate : function(username, password) {
		var usuario;
		User.findOne({
			email : username,
			password : password
		}, function(err, user) {
			if (err) {
				usuario = err;
			} else {
				usuario = user;
				console.log("user",user);
			}
		});
		console.log("usuario",usuario);
	},

	validateUser : function(username) {
		// spoofing the DB response for simplicity
		User.findOne({
			email : username
		}, function(err, user) {
			return user;
		});
	},
}

// private method
function genToken(user) {
	var expires = expiresIn(7); // 7 days
	var token = jwt.encode({
		exp : expires
	}, require('../../config/secret')());
	user.token = token;

	return {
		token : token,
		expires : expires,
		user : user
	};
}

function expiresIn(numDays) {
	var dateObj = new Date();
	return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;