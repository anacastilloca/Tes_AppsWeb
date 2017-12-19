import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../login/Token/token.service";
import {UrlPrincipalService} from "../../../Servicios/url-principal.service";
import {EstudianteClass} from "../../../Modelos/EstudianteClass";
import 'rxjs/add/operator/map';

@Injectable()
export class EstudianteService {

  /**ATRIBUTOS**/
    //Para formar la url del modelo Estudiante
  url:string;
  modelo='Estudiante';
  headers:Headers;

  constructor(private _http:Http, private _tokenService:TokenService, private _urlPrincipal:UrlPrincipalService) {
    this.url=this._urlPrincipal.url+this.modelo;
    this.headers= new Headers();
    this.headers.append('Authorization', 'Bearer'+this._tokenService.token)
  }

  /**METODOS**/

  //Para agregar el registro de un nuevo terapeuta
  agregarEstudiante(estudiante:EstudianteClass){
    let datosEnviar={
      cedula:estudiante.cedula,
      nombre:estudiante.nombre,
      edad:estudiante.edad,
      contrasenia:estudiante.contrasenia,
      nombreRepresentante:estudiante.nombreRepresentante,
      celularRepresentante:estudiante.celularRepresentante,
      direccionRepresentante:estudiante.direccionRepresentante,
      idTerapeuta:estudiante.idTerapeuta,
      idOrganizacion:estudiante.idOrganizacion
    };
    return this._http.post(this.url,datosEnviar,{headers:this.headers})
      .map (res =>{
        return res.json();
      })
  }

  //Para actualizar los datos de un estudiante
  actualizarEstudiante(estudiante:EstudianteClass){
    let datosEnviar={
      cedula:estudiante.cedula,
      nombre:estudiante.nombre,
      edad:estudiante.edad,
      contrasenia:estudiante.contrasenia,
      nombreRepresentante:estudiante.nombreRepresentante,
      celularRepresentante:estudiante.celularRepresentante,
      direccionRepresentante:estudiante.direccionRepresentante,
      idTerapeuta:estudiante.idTerapeuta,
      idOrganizacion:estudiante.idOrganizacion
    };

    return this._http.put(this.url+`/${estudiante.id}`,datosEnviar, {headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para eliminar el registro de un Estudiante
  eliminarEstudiante(estudiante:EstudianteClass){
    return this._http.delete(this.url+`/${estudiante.id}`,{headers:this.headers})
      .map(res=>{
        return res.json();
      })
  }

  //Para presentar el listado de los terapeutas por organizacion
  listadoEstudiantePorOrganizacion(idOrganizacion:string){
    return this._http.get(this.url+`?idOrganizacion=${idOrganizacion}`,{headers:this.headers})
      .map(res=>{
        return res.json()
      })
  }

  //Para actualizar la contraseña
  actualizarContraseniaEst(cedula:string,contraseniaAntigua:string, contraseniaNueva:string){
    let metodo='/actualizacionContrasenia';
    let datosEnviar ={
      cedula:cedula,
      contrasenia:contraseniaAntigua,
      contraseniaNueva:contraseniaNueva
    }
    return this._http.put(this.url+metodo,datosEnviar)
      .map(res=>{
        return res.json();
      })
  }

}
