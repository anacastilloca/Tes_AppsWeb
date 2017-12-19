/**
 * TerapeutaController
 *
 * @description :: Server-side logic for managing Terapeutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');

module.exports = {

  actualizacionContrasenia: function (req, resp) {
    var user = req.allParams();

    if (user.cedula && user.contrasenia && user.contraseniaNueva) {
      Terapeuta.findOne({
        cedula: user.cedula
      })
        .exec(
          function (err, userEncontrado) {
            if (err) {
              return resp.json(400, {mjs: 'Usuario no encontrado'})
            }
            //console.log(user)
            if (userEncontrado) {
              Passwords.checkPassword({
                passwordAttempt: user.contrasenia,
                encryptedPassword: userEncontrado.contrasenia
              })
                .exec(
                  {
                    error: function (err) {
                      return resp.json(400, {mjs: 'Error actualizando el usuario'})
                    },
                    success: function () {
                      //console.log(userEncontrado);
                      Terapeuta.update({
                          cedula: user.cedula,
                        },
                        {contrasenia: user.contraseniaNueva})
                        .exec(function (err, userActualizado) {
                          return resp.json(200, {mjs: 'Usuario Actualizado'})
                        })
                    }
                  });
            } else {
              return resp.json(200, {mjs: 'Usuario encontrado'})
            }
          }
        )
    } else {
      return resp.json(200, {mjs: 'Parametros no validos'})
    }
  }
};

