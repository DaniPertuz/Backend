var http = require('http')
var express = require('express')
var path = require('path')
var Routing = require('./requestRouting.js')

var PORT = 8080
var app = express()

var Server = http.createServer(app)

app.use('/', Routing)
Server.listen(PORT, function(){
  console.log('Servidor escuhando puerto ' + PORT)
})