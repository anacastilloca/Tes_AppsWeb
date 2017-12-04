import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {TokenService} from "../../login/Token/token.service";
import {UrlPrincipalService} from "../../../Servicios/url-principal.service";

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

}
