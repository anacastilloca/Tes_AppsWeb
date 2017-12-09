import { Component, OnInit } from '@angular/core';
import {TerapeutaClass} from "../../../Modelos/TerapeutaClass";
import {TerapeutaService} from "../Servicios/terapeuta.service";
import {TokenService} from "../../login/Token/token.service";

@Component({
  selector: 'app-gestion-terapeuta',
  templateUrl: './gestion-terapeuta.component.html',
  styleUrls: ['./gestion-terapeuta.component.css']
})
export class GestionTerapeutaComponent implements OnInit {

  /**ATRIBUTOS**/

  //Para realizar la búsqueda por el nombre de los terapeutas
  busquedaPorNombre:string;

  //Para obtener los datos de los terrapeutas
  terapeuta:TerapeutaClass= new TerapeutaClass("");
  terapeutas:TerapeutaClass[]=[];

  constructor(private _terapeutaService:TerapeutaService, private _tokenService:TokenService) { }

  ngOnInit() {
    this._terapeutaService.listarTerapeutasPorOrganizacion(this._tokenService.idOTE)
      .subscribe(
        (terapeutas:TerapeutaClass[]) => {
          //localStorage.setItem('terapeutas',JSON.stringify(terapeutas))
          this.terapeutas = terapeutas.map(
            (terapeuta:TerapeutaClass)=>{
              terapeuta.editar = false;
              return terapeuta;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  modalVer(indice){
    this.terapeuta=this.terapeutas[indice];
  }

  modalAgregarActualizarFrontEnd(evento){
    //console.log(evento)
    this.terapeutas.push(evento);
  }

}
