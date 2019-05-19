/*
* Dependencias
*/

var http = require('http')
var express = require('express')
var socketio = require('socket.io')

var PORT = 8082
var app = express()

app.use(express.static('public'))


var Server = http.createServer(app)

var io = socketio(Server)

Server.listen(PORT, function(){
  console.log('TicTacToe escuchando puerto ' + PORT)
})
