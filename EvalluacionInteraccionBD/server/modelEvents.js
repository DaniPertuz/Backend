var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  nombre : { type: String, require: true },
  fechaInicio : { type: Date, require: true },
  diaCompleto : { type: Boolean, require: true },
  horaInicio : { type: String, require: true },
  horaFin : { type: String, require: true }
});

var Events = mongoose.model('events', eventSchema);

module.exports = Events;
