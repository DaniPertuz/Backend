var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();

function handleRequest(req, res){
  dispatcher.onGet('/users', function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'})
    res.end('Estas en el modulo de usuarios')
  })

  dispatcher.onGet('/admin', function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'})
    res.end('Estas en el modulo de administradores')
  })

  dispatcher.onGet('/dashboard', function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'})
    res.end('Estas en el modulo de dashboard')
  })

  dispatcher.onError(function(req, res){
    res.writeHead(400)
    res.end('No se encuentra modulo')
  })

  dispatcher.dispatch(req, res)
}
module.exports = handleRequest
