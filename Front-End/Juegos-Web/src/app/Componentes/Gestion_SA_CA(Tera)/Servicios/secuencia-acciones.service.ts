import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../login/Token/token.service";
import {UrlPrincipalService} from "../../../Servicios/url-principal.service";
import {SecuenciaAccionesClass} from "../../../Modelos/SecuenciaAccionesClass";
import 'rxjs/add/operator/map';

@Injectable()
export class SecuenciaAccionesService {

  /**ATRIBUTOS**/
  //Para formar la url del modelo Secuencia Acciones
  url:string;
  modelo='Secuencia_Acciones';
  headers:Headers;

  constructor(private _http:Http, private _tokenService:TokenService, private _urlPrincipal:UrlPrincipalService) {
    this.url=this._urlPrincipal.url+this.modelo;
    this.headers= new Headers();
    this.headers.append('Authorization', 'Bearer'+this._tokenService.token)
  }

  /**METODOS**/

  //Para agregar el registro de una nueva secuencia de acciones
  agregarSA(sa:SecuenciaAccionesClass){
    let datosEnviar={
      nombre:sa.nombre,
      imagen1:sa.imagen1,
      imagen2:sa.imagen2,
      imagen3:sa.imagen3,
      imagen4:sa.imagen4,
      imagen5:sa.imagen5,
      imagen6:sa.imagen6,
      idTerapeuta:sa.idTerapeuta,
    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para actualizar los datos de una secuencia de acciones
  actualizarSA(sa:SecuenciaAccionesClass){
    let datosEnviar={
      nombre:sa.nombre,
      imagen1:sa.imagen1,
      imagen2:sa.imagen2,
      imagen3:sa.imagen3,
      imagen4:sa.imagen4,
      imagen5:sa.imagen5,
      imagen6:sa.imagen6,
      idTerapeuta:sa.idTerapeuta,
    };
    return this._http.put(this.url+`/${sa.id}`,datosEnviar,{headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para eliminar un registro de secuencia de acciones
  eliminarSA(sa:SecuenciaAccionesClass){
    return this._http.delete(this.url+`/${sa.id}`,{headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para presentar el listado de las secuencias de acciones por terapeuta
   listarSAporTerapeuta(idTerapeuta:string){
    return this._http
      .get(this.url+`?idTerapeuta=${idTerapeuta}`,{headers:this.headers})
      .map(res => {
        return res.json()
      })
  }
}
