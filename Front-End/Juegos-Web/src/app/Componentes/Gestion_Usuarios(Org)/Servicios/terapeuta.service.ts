import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../login/Token/token.service";
import {UrlPrincipalService} from "../../../Servicios/url-principal.service";
import {TerapeutaClass} from "../../../Modelos/TerapeutaClass";
import 'rxjs/add/operator/map';

@Injectable()
export class TerapeutaService {

  /**ATRIBUTOS**/
  //Para formar la url del modelo Terapeuta
  url:string;
  modelo='Terapeuta'
  headers:Headers;


  constructor(private _http:Http,
              private _tokenService:TokenService,
              private _urlPrincipal:UrlPrincipalService) {
    this.url=this._urlPrincipal.url+this.modelo;
    this.headers= new Headers();
    this.headers.append('Authorization','Bearer'+this._tokenService.token)
  }

  //Método para ingresar un nuevo registro de terapeuta
  agregarTerapeuta(terapeuta:TerapeutaClass){
    //console.log(terapeuta)
    let datosEnviar={
      cedula:terapeuta.cedula,
      nombre:terapeuta.nombre,
      correo:terapeuta.correo,
      contrasenia:terapeuta.contrasenia,
      direccion:terapeuta.direccion,
      celular:terapeuta.celular,
      idOrganizacion:terapeuta.idOrganizacion
    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map(res =>{
        return res.json();
      })
  }

  //Método para actualizar los datos de un terapeuta
  editarTerapeuta(terapeuta:TerapeutaClass){
    let datosEnviar={
      cedula:terapeuta.cedula,
      nombre:terapeuta.nombre,
      correo:terapeuta.correo,
      contrasenia:terapeuta.contrasenia,
      direccion:terapeuta.direccion,
      celular:terapeuta.celular
    };
    return this._http.put(this.url+`/${terapeuta.id}`,datosEnviar)
      .map(res =>{
        return res.json();
      })
  }

  //Método para eliminar un registro de Terapeuta
  eliminarTerapeuta(terapeuta:TerapeutaClass){
    return this._http.delete(this.url+`/${terapeuta.id}`).
      map(res=>{
        return res.json()
    })
  }

  //Método para presentar el listado de los terapeutas por organizacion
  listarTerapeutasPorOrganizacion(idOrganizacion:string){
    return this._http
      .get(this.url+'?idOrganizacion='+`${idOrganizacion}`)
      .map(res => {
        return res.json()
      })
  }

}
