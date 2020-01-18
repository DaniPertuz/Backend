var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  nombre : { type: String, require: true },
  email : { type: String, require: true },
  password : { type: String, require: true },
  fechaNacimiento : { type: String, require: true }
});

var Users = mongoose.model('users', eventSchema);

module.exports = Users;
