import { Component, OnInit } from '@angular/core';
import {SecuenciaAccionesClass} from "../../../Modelos/SecuenciaAccionesClass";
import {TokenService} from "../../login/Token/token.service";
import {SecuenciaAccionesService} from "../Servicios/secuencia-acciones.service";

@Component({
  selector: 'app-gestion-sa',
  templateUrl: './gestion-sa.component.html',
  styleUrls: ['./gestion-sa.component.css']
})
export class GestionSaComponent implements OnInit {

  /**ATRIBUTOS**/

  //Para obtener los datos de una secuencia de acciones
  SA:SecuenciaAccionesClass;
  SAs:SecuenciaAccionesClass[];

  constructor(private _tokenService:TokenService, private _saService:SecuenciaAccionesService) { }

  ngOnInit() {
    this._saService.listarSAporTerapeuta(this._tokenService.idOTE).subscribe(
      (SAs:SecuenciaAccionesClass[])=>{
        this.SAs= SAs.map(
          (SA:SecuenciaAccionesClass)=>{
            return SA;
          }
        )
      },
      err=>{
        console.log('Error', err)
      }
    )
  }

}
