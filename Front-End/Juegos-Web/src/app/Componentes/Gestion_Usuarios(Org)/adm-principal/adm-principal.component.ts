import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../login/Token/token.service";

@Component({
  selector: 'app-adm-principal',
  templateUrl: './adm-principal.component.html',
  styleUrls: ['./adm-principal.component.css']
})
export class AdmPrincipalComponent implements OnInit {

  /**ATRIBUTOS**/

  //Para obtener el nombre de la organización
  nombreOrganizacion:string;

  constructor(private _tokenService:TokenService) {
    this.nombreOrganizacion=this._tokenService.nombreOTE;
  }

  ngOnInit() {
    console.log(this._tokenService.token);
    console.log(this._tokenService.idOTE);
    console.log(this._tokenService.nombreOTE);
  }

  logOut(){
    this._tokenService.token="";
  }

}
