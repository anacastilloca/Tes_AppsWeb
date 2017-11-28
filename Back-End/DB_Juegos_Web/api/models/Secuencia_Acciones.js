/**
 * Secuencia_Acciones.js
 *
 * @description :: TODO: Entidad que contiene el nombre y las imágenes de una Secuencia de Acción.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },
    imagen1:{
      type:'string'
    },
    imagen2:{
      type:'string'
    },
    imagen3:{
      type:'string'
    },
    imagen4:{
      type:'string'
    },
    imagen5:{
      type:'string'
    },
    imagen6:{
      type:'string'
    },

    /**Para las relaciones one to many**/

    //SECUNDARIO T-SA
    //Una secuencia de acciones puede pertenecer a un terapeuta
    idTerapeuta:{
      model:'Terapeuta'
    },

    /**Para las relaciones many to many**/

    //DOMINANTE E-SA
    //Una secuencia de acciones puede pertenecer a varios estudiantes
    secuenciasAcciones_E:{
      collections:'estudiante_SA',
      via:'idSecuenciaAcciones'
    }

  }
};

