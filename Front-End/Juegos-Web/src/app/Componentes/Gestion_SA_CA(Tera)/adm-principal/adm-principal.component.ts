import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../login/Token/token.service";

@Component({
  selector: 'app-adm-principal',
  templateUrl: './adm-principal.component.html',
  styleUrls: ['./adm-principal.component.css']
})
export class AdmPrincipalComponent implements OnInit {

  /**ATRIBUTOS**/

    //Para obtener el nombre de la organización
  nombreTerapeuta:string;

  constructor(private _tokenService:TokenService) {
    this.nombreTerapeuta=this._tokenService.nombreOTE;
  }

  ngOnInit() {
  }

  logOut(){
    localStorage.clear();
  }
}
