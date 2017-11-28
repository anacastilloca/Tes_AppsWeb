/**
 * Estudiante_CA.js
 *
 * @description :: TODO: Entidad que rompe la relación many to many de Estudiante y Comunicación Alternativa.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    /**Para las relaciones many to many**/

    //SECUNDARIO E-CA
    idEstudiante:{
      model:'Estudiante'
    },

    //SECUNDARIO E-CA
    idComunicacionAlternativa:{
      model:'Comunicacion_Alternativa'
    }

  }
};

