import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../login/Token/token.service";
import {UrlPrincipalService} from "../../../Servicios/url-principal.service";
import {ComunicacionAlternativaClass} from "../../../Modelos/ComunicacionAlternativaClass";

@Injectable()
export class ComunicacionAlternativaService {

  /**ATRIBUTOS**/
  //Para formar la url del modelo Comunicación Alternativa
  url:string;
  modelo='Comunicacion_Alternativa'
  headers:Headers

  constructor(private _http:Http, private _tokenService:TokenService, private _urlPrincipal:UrlPrincipalService) {
    this.url=this._urlPrincipal.url+this.modelo;
    this.headers= new Headers()
    this.headers.append('Authorization', 'Bearer'+this._tokenService.token)
  }

  /**METODOS**/

  //Para agregar el registro de un nuevo campo semantico de Comunicacion alternativa
  agregarCampoSemantico(cs:ComunicacionAlternativaClass){
    let datosEnviar ={
      nombre:cs.nombre,
      imagen1:cs.imagen1,
      imagen2:cs.imagen2,
      imagen3:cs.imagen3,
      imagen4:cs.imagen4,
      imagen5:cs.imagen5,
      imagen6:cs.imagen6,
      imagen7:cs.imagen7,
      imagen8:cs.imagen8,
      imagen9:cs.imagen9,
      imagen10:cs.imagen10,
      imagen11:cs.imagen11,
      imagen12:cs.imagen12,
      imagen13:cs.imagen13,
      imagen14:cs.imagen14,
      imagen15:cs.imagen15,
      imagen16:cs.imagen16,
      imagen17:cs.imagen17,
      imagen18:cs.imagen18,
      imagen19:cs.imagen19,
      imagen20:cs.imagen20,
      imagen21:cs.imagen21,
      imagen22:cs.imagen22,
      imagen23:cs.imagen23,
      imagen24:cs.imagen24,
      imagen25:cs.imagen25,
      imagen26:cs.imagen26,
      idTerapeuta:cs.idTerapeuta,
    };

    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para actualizar los datos de un campo semantico de Comunicacion alternativa
  actualizarCampoSemantico(cs:ComunicacionAlternativaClass){
    let datosEnviar ={
      nombre:cs.nombre,
      imagen1:cs.imagen1,
      imagen2:cs.imagen2,
      imagen3:cs.imagen3,
      imagen4:cs.imagen4,
      imagen5:cs.imagen5,
      imagen6:cs.imagen6,
      imagen7:cs.imagen7,
      imagen8:cs.imagen8,
      imagen9:cs.imagen9,
      imagen10:cs.imagen10,
      imagen11:cs.imagen11,
      imagen12:cs.imagen12,
      imagen13:cs.imagen13,
      imagen14:cs.imagen14,
      imagen15:cs.imagen15,
      imagen16:cs.imagen16,
      imagen17:cs.imagen17,
      imagen18:cs.imagen18,
      imagen19:cs.imagen19,
      imagen20:cs.imagen20,
      imagen21:cs.imagen21,
      imagen22:cs.imagen22,
      imagen23:cs.imagen23,
      imagen24:cs.imagen24,
      imagen25:cs.imagen25,
      imagen26:cs.imagen26,
      idTerapeuta:cs.idTerapeuta,
    };

    return this._http.put(this.url+`/${cs.id}`,datosEnviar,{headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para eliminar un campo semantico de la comunicacion alternativa
  eliminarCA(cs:ComunicacionAlternativaClass){
    return this._http.delete(this.url+`/${cs.id}`,{headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para presentar el listado de los campos semanticos de la comunicación alternativa por terapeuta
  listarCSporTerapeuta(idTerapeuta:string){
    return this._http
      .get(this.url+`?idTerapeuta=${idTerapeuta}`,{headers:this.headers})
      .map(res => {
        return res.json()
      })
  }

}
