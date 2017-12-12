import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EstudianteClass} from "../../../../../Modelos/EstudianteClass";
import {EstudianteService} from "../../../Servicios/estudiante.service";

@Component({
  selector: 'app-eliminar-e',
  templateUrl: './eliminar-e.component.html',
  styleUrls: ['./eliminar-e.component.css']
})
export class EliminarEComponent implements OnInit {

  /**ATRIBUTOS **/

    //Para obtener el registro del estudiante a borrar
  @Input() estudiante:EstudianteClass;

  //Para actualizar el arreglo del frontend (tabla) de los registros existentes
  @Output() actualizacionTablaEstudiante = new EventEmitter();

  constructor(private _estudianteService:EstudianteService) { }

  ngOnInit() {
  }

  eliminarEstudiante(){
    this._estudianteService.eliminarEstudiante(this.estudiante)
      .subscribe(
        ingreso=>{
          this.actualizacionTablaEstudiante.emit(this.estudiante)
        },
          err => {
            console.log("Error",err);
          }

      )
  }



}
