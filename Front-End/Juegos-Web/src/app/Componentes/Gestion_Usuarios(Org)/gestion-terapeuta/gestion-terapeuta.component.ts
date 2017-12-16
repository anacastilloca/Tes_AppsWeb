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

  llamadoModal:boolean;

  constructor(private _terapeutaService:TerapeutaService, private _tokenService:TokenService) { }

  //Metodo para realizar la presentación de todos los registros de los terapeutas
  ngOnInit() {
    this._terapeutaService.listarTerapeutasPorOrganizacion(this._tokenService.idOTE)
      .subscribe(
        (terapeutas:TerapeutaClass[]) => {
          this.terapeutas = terapeutas.map(
            (terapeuta:TerapeutaClass)=>{
              return terapeuta;
            }
          );
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }

  //Metodo para obtener un valor desde el componente agregar mediante Output y EventEmitter
  actualizarTablaAgregar(evento){
    //console.log(evento)
    this.terapeutas.push(evento);
  }

  //Metodo para enviar datos al componente editar mediante Input
  modalEditar(indice){
    this.terapeuta=this.terapeutas[indice]
  }

  //Metodo para enviar datos al componente eliminar mediante Input
  modalEliminar(indice){
    this.terapeuta=this.terapeutas[indice];
  }

  //Metodo para obtener un valor desde el componente elimianr mediante Output y EventEmitter
  actualizarTablaEliminar(evento){
    let indice = this.terapeutas.indexOf(evento);
    this.terapeutas.splice(indice,1);
  }

  //Metodo para enviar datos al componente ver mediante Input
  modalVer(indice){
    this.llamadoModal=true;
    this.terapeuta=this.terapeutas[indice];
  }

}
