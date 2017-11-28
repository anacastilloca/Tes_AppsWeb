/**
 * Terapeuta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
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
    correo:{
      type:'email'
    },
    contrasenia:{
      type:'string'
    },
    direccion:{
      type:'string'
    },
    celular:{
      type:'integer'
    },

    /**Para las relaciones one to many**/

    //SECUNDARIO O-T
    //Un Terapeuta solo puede pertener a una Organización
    idOrganizacion:{
      model:'Organizacion'
    },

    //DOMINANTE T-E
    //Un terapeuta puede tener varios estudiantes
    estudiantes:{
      collection:'estudiante',
      via:'idTerapeuta'
    },

    //DOMINANTE T-CA
    //Un terapeuta puede crear muchos campos semánticos de comunicación alternativa
    camposSemanticos:{
      collections:'campoSemantico_T',
      via:'idTerapeuta'
    },

    //DOMINANTE T-SA
    //Un terapeuta puede crear muchas secuencia de acciones
    secuenciasAcciones:{
      collections:'secuenciaAcciones_T',
      via:'idTerapeuta'
    }
  },
  beforeCreate:function (usuario,cb) {
    //console.log(usuario)
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

