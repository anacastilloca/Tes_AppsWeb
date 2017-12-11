import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TerapeutaClass} from "../../../../../Modelos/TerapeutaClass";
import {TerapeutaService} from "../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-eliminar-t',
  templateUrl: './eliminar-t.component.html',
  styleUrls: ['./eliminar-t.component.css']
})
export class EliminarTComponent implements OnInit {

  /**ATRIBUTOS **/

  //Para obtener el registro del terapeuta a borrar
  @Input() terapeuta:TerapeutaClass;

  //Para actualizar el arreglo del frontend (tabla) de los registros existentes
  @Output() eliminarTerapeutas = new EventEmitter();

  constructor(private _terapeutaService:TerapeutaService) { }

  ngOnInit() {
  }

  eliminarTerapeuta(){
    console.log(this.terapeuta)
    this._terapeutaService.eliminarTerapeuta(this.terapeuta)
      .subscribe(
        ingreso => {
          this.eliminarTerapeutas.emit(this.terapeuta)
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}
