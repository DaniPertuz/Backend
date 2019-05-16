var express = require('express')
var Router = express.Router()

Router.get('/users', function(req, res){
  res.send('Estas en el modulo de usuarios')
  res.end()
})

Router.get('/admin', function(req, res){
  res.send('Estas en el modulo de administradores')
  res.end()
})

Router.get('/dashboard', function(req, res){
  res.send('Estas en el modulo de dashboard')
  res.end()
})

Router.all('/*', function(req, res){
  res.send('No se encontro recurso')
  res.end()
})

module.exports = Router
