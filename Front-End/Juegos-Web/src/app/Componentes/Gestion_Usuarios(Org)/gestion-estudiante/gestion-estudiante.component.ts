import { Component, OnInit } from '@angular/core';
import {EstudianteClass} from "../../../Modelos/EstudianteClass";
import {EstudianteService} from "../Servicios/estudiante.service";
import {TokenService} from "../../login/Token/token.service";
import {TerapeutaClass} from "../../../Modelos/TerapeutaClass";

@Component({
  selector: 'app-gestion-estudiante',
  templateUrl: './gestion-estudiante.component.html',
  styleUrls: ['./gestion-estudiante.component.css']
})
export class GestionEstudianteComponent implements OnInit {

  /**ATRIBUTOS**/

    //Para realizar la búsqueda por el nombre de los estudiantes
  busquedaPorNombre:string;

  //Para obtener los datos de los estudiantes
  estudiante:EstudianteClass= new EstudianteClass("");
  estudiantes:EstudianteClass[]=[];

  //Para validar el llamado de los modal
  llamadoModal=false;

  constructor(private _estudianteService:EstudianteService, private _tokenService:TokenService) { }

  ngOnInit() {
    this._estudianteService.listadoEstudiantePorOrganizacion(this._tokenService.idOTE)
      .subscribe(
        (estudiantes:EstudianteClass[])=>{
          this.estudiantes=estudiantes.map(
            (estudiante:EstudianteClass)=>{
              return estudiante
            })
        },
        error=>{
          console.log("Error: ",error)
        })
  }

  //Metodo para obtener un valor desde el componente agregar mediante Output y EventEmitter
  actualizarTablaAgregar(evento){
    //console.log(evento)
    this.estudiantes.push(evento);
  }

  //Metodo para enviar datos al componente editar mediante Input
  modalEditar(indice){
    this.llamadoModal=true;
    this.estudiante=this.estudiantes[indice]
  }


  //Ojo esto se agrego
  datosEstudianteAcutuales(evento){
    this.estudiantes.indexOf(evento);
  }

  //Metodo para enviar datos al componente eliminar mediante Input
  modalEliminar(indice){
    this.estudiante=this.estudiantes[indice];
  }

  //Metodo para obtener un valor desde el componente elimianr mediante Output y EventEmitter
  actualizarTablaEliminar(evento){
    let indice = this.estudiantes.indexOf(evento);
    this.estudiantes.splice(indice,1);
  }

  //Metodo para enviar datos al componente ver mediante Input
  modalVer(indice){
    this.llamadoModal=true;
    this.estudiante=this.estudiantes[indice];
  }

}
