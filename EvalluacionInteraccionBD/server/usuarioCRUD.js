var Usuario = require('./modelUsuarios.js')

module.exports.crearUsuarioDaniel = function(callback){
  var arr = [{ nombre: "Daniel", email: 'ddpertuzoroz@hotmail.com', password: "daniel04", fechaNacimiento: "29/09/1992"}];
  Usuario.insertMany(arr, function(error, docs) {
    if (error){
      if (error.code == 11000){
        callback("Utilice los siguientes datos: </br>usuario: Daniel | password:daniel04")
      }else{
        callback(error.message)
      }
    }else{
      callback(null, "El usuario 'Daniel' se ha registrado correctamente.")
    }
  });
}
