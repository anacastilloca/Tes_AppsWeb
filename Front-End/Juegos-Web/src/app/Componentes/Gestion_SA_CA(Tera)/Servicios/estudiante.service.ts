import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../login/Token/token.service";
import {UrlPrincipalService} from "../../../Servicios/url-principal.service";

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

  //Para presentar el listado de los terapeutas por organizacion
  listadoEstudiantePorOrganizacion(idOrganizacion:string){
    return this._http.get(this.url+`?idOrganizacion=${idOrganizacion}`,{headers:this.headers})
      .map(res=>{
        return res.json()
      })
  }

}
