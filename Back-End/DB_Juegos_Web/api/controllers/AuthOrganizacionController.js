/**
 * AuthOrganizacionController
 *
 * @description :: Server-side logic for managing Authorganizacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//OOJOO RIVISAR DOCUMENTACION
// PARA ENCRIPTAR LA contraseña
//npm install --save machinepack-passwords
//npm install --save jsonwebtoken   //Para dar los permisos

var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');

module.exports = {
  logIn:function (req,res) {
    var parametros = req.allParams()

    if(parametros.ruc&&parametros.contrasenia){
      Organizacion
        .findOne({
          ruc:parametros.ruc
        })
        .exec(function (err,usuarioEncontrado) {
          if(err) return res.serverError("Error",err);
          if(!usuarioEncontrado){
            return res.notFound("Organización no Encontrada");
          }else{
            Passwords.checkPassword({
              passwordAttempt: parametros.contrasenia,
              encryptedPassword: usuarioEncontrado.contrasenia,
            })
              .exec({
                error: function (err) {
                  return res.serverError(err);
                },
                incorrect: function () {
                  return res.ok("Datos Invalidos")
                },
                success: function () {
                  // devolver la credencial
                  var token = jwt
                    .sign(
                      {
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: {
                          id:usuarioEncontrado.id,
                          nombre:usuarioEncontrado.nombre,
                          ruc:usuarioEncontrado.ruc
                        }

                      },
                      'organizacionECU');

                  return res.json(200,{'token':token, 'idOrganizacion':usuarioEncontrado.id, 'nombreOrganizacion':usuarioEncontrado.nombre});
                }
              });
          }
          console.log('Es el ide de la organizacion: ',usuarioEncontrado.id)
        });
    }else{
      return res.ok("No envia ruc y password");

    }
  }
};

