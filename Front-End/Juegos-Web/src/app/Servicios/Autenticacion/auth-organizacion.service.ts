import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UrlPrincipalService} from "../url-principal.service";
import {TokenService} from "../../Componentes/login/Token/token.service";

@Injectable()
export class AuthOrganizacionService {

  //Atributos
  url:string
  modelo='AuthOrganizacion'

  constructor(private _http:Http, private _urlPrincipal:UrlPrincipalService) {
    this.url=this._urlPrincipal.url+this.modelo;
    //console.log(localStorage.getItem('tokenOrganizacion'))
  }

  logIn(ruc:string, contrasenia:string){
    let metodo='/logIn'
    let datosEnviar={
      ruc,
      contrasenia:contrasenia
    };
    return this._http.post(this.url+metodo, datosEnviar)
  }

}
