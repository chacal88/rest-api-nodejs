var User = require('../model/User');
var users = {
 
  getAll: function(req, res) {
    var allusers = data; // Spoof a DB call
    res.json(allusers);
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    var user = data[0]; // Spoof a DB call
    res.json(user);
  },
 
  create: function(req, res) {
	  var userModel = new User();
		userModel.email = req.body.email;
		userModel.password = req.body.password;
		userModel.save(function(err, user) {
			if (err) {
				res.status(401).send(err);
			} else {
				res.status(201).send(user);
			}
		})
  },
 
  update: function(req, res) {
    var updateuser = req.body;
    var id = req.params.id;
    data[id] = updateuser // Spoof a DB call
    res.json(updateuser);
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};
module.exports = users;