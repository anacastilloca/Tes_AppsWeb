/**
 * Organizacion.js
 *
 * @description :: TODO: Entidad que contiene los datos más relevantes de una Organización, Fundación, Institución, etc.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Passwords = require('machinepack-passwords');

module.exports = {

  attributes: {
    ruc:{
      type:'string',
      unique:true
    },
    nombre:{
      type:'string'
    },
    correo:{
      type:'email',
    },
    contrasenia:{
      type:'string'
    },
    direccion:{
      type:'string'
    },
    telefono:{
      type:'integer'
    },
    descripcion:{
      type:'string'
    },

    /**Para las relaciones one to many**/

    //DOMINANTE O-T
    // Una organización puede tener muchos terapeutas
    terapeutas:{
      collection:'terapeuta',
      via:'idOrganizacion'
    },

    //DOMINANTE O-E
    // Una organización puede tener muchos estudiantes
    estudiantes:{
      collection:'estudiante',
      via:'idOrganizacion'
    }


  },

  beforeCreate:function (usuario,cb) {
    Passwords.encryptPassword({
      password: usuario.contrasenia
    })
      .exec(
        {
          error: function (err) {
            cb("Error en hash password",err)
          },
          success: function (hashedPassword) {
            usuario.contrasenia = hashedPassword;
            cb()
          }
        });
  },

  beforeUpdate:function (valorAActualizar,cb) {
    if(valorAActualizar.contrasenia){
      Passwords.encryptPassword({
        password: valorAActualizar.contrasenia
      })
        .exec(
          {
            error: function (err) {
              cb("Error en hash password",err)
            },
            success: function (hashedPassword) {
              valorAActualizar.contrasenia = hashedPassword;
              cb()
            }
          });
    }else{
      cb()
    }
  }
};

