const Router = require('express').Router();
const Events = require('./modelEvents.js');

Router.get('/all', function(req, res) {
  Events.find({}).exec(function(err, docs) {
    if (err) {
      res.status(500);
      res.json(err)
    }
    res.json(docs)
  })
})

Router.post('/new', function(req, res) {
  let event = new Events({
    nombre: req.body.titulo,
    fechaInicio: req.body.start_date,
    diaCompleto: req.body.allDay,
    horaInicio: req.body.start_hour,
    horaFin: req.body.end_hour
  })

  event.save(function(error) {
    if (error) {
      res.status(500);
      res.json(error);
    }
    res.send("Evento guardado");
  })
})

Router.post('/update/:_id&:start&:end', function(req, res) {
  Events.findOne({_id:req.params._id}).exec((error, result) => {
    let id = req.params._id, start = req.params.start, end = req.params.end;
    if (error){
      res.send(error);
    } else {
      Events.update({_id: id}, {start:start, end:end}, (error, result) => {
        if (error) {
          res.send(error);
        } else {
          res.send("Evento actualizado");
        }
      })
    }
  })
})

Router.post('/delete/:_id', function(req, res)  {
  let id = req.params._id;
  Events.remove({_id:id}, (error) => {
    if (error) {
      res.status(500);
      res.json(error);
    }
    res.send("Evento eliminado");
  })
})

module.exports = Router;
