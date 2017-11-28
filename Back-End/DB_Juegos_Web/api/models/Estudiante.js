/**
 * Estudiante.js
 *
 * @description :: TODO: Entidad que contiene la información más relevante de un Estudiante.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var Passwords = require('machinepack-passwords');

module.exports = {

  attributes: {
    cedula:{
      type:'string',
      unique:true
    },
    nombre:{
      type:'string'
    },
    edad:{
      type:'integer'
    },
    contrasenia:{
      type:'string'
    },
    nombreRepresentante:{
      type:'string'
    },
    celularRepresentante:{
      type:'integer'
    },
    direccionRepresentante:{
      type:'string'
    },

    /**Para las relaciones one to many**/

    //SECUNDARIO T-E
    //Un estudiante solo puede pertenecer a un Terapeuta
    idTerapeuta:{
      model:'Terapeuta'
    },

    //SECUNDARIO O-E
    //Un estudiante solo puede pertenecer a una Organización
    idOrganizacion:{
      model:'Organizacion'
    },

    /**Para las relaciones many to many**/

    //DOMINANTE E-CA
    //Un estudiante puede tener muchos campos semánticos de comunicación alternativa
    camposSemanticos:{
      collections:'campoSemantico_E',
      via:'idEstudiante'
    },

    //DOMINANTE E-SA
    //Un estudiante puede tener muchas secuencia de acciones
    secuenciasAcciones:{
      collections:'secuenciaAcciones_E',
      via:'idEstudiante'
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

