const Router = require('express').Router();
const Users = require('./modelUsers.js');

Router.post('/login', function(req, res) {
  let user = req.body.user, pass = req.body.pass;
  Users.findOne({email: user, password: pass}).count({}, function(err, count) {
    if (err) {
      res.status(500);
      res.json(err);
    } else {
      if (count == 1) {
        res.send("Validado");
      } else {
        res.send("Verifique datos ingresados");
      }
    }
  })
})

module.exports = Router
