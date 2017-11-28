/**
 * Comunicacion_Alternativa.js
 *
 * @description :: TODO: Entidad que contiene el nombre y las imágenes de los campos semánticos de la Comunicación Alternativa.
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
    imagen7:{
      type:'string'
    },
    imagen8:{
      type:'string'
    },
    imagen9:{
      type:'string'
    },
    imagen10:{
      type:'string'
    },
    imagen11:{
      type:'string'
    },
    imagen12:{
      type:'string'
    },
    imagen13:{
      type:'string'
    },
    imagen14:{
      type:'string'
    },
    imagen15:{
      type:'string'
    },
    imagen16:{
      type:'string'
    },
    imagen17:{
      type:'string'
    },
    imagen18:{
      type:'string'
    },
    imagen19:{
      type:'string'
    },
    imagen20:{
      type:'string'
    },
    imagen21:{
      type:'string'
    },
    imagen22:{
      type:'string'
    },
    imagen23:{
      type:'string'
    },
    imagen24:{
      type:'string'
    },
    imagen25:{
      type:'string'
    },
    imagen26:{
      type:'string'
    },

    /**Para las relaciones one to many**/

    //SECUNDARIO T-CA
    //Un campo semántico de la comunicación alternativa puede pertenecer a un terapeuta
    idTerapeuta:{
      model:'Terapeuta'
    },

    /**Para las relaciones many to many**/

    //DOMINANTE E-CA
    //Un campo semántico de la comunicación alternativa puede pertenecer a varios estudiantes
    camposSemanticos_E:{
      collections:'estudiante_CA',
      via:'idComunicacionAlternativa'
    }
  }
};

