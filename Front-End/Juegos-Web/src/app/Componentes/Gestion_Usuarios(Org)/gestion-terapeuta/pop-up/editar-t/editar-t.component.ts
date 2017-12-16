import {Component, Input, OnInit} from '@angular/core';
import {TerapeutaClass} from "../../../../../Modelos/TerapeutaClass";
import {TerapeutaService} from "../../../Servicios/terapeuta.service";

@Component({
  selector: 'app-editar-t',
  templateUrl: './editar-t.component.html',
  styleUrls: ['./editar-t.component.css']
})
export class EditarTComponent implements OnInit {

  /**ATRIBUTOS**/

  //Para obtener el registro de terapeuta a actualizar
  @Input() editarterapeuta:TerapeutaClass;

  status:boolean;

  constructor(private _terapeutaService: TerapeutaService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._terapeutaService.editarTerapeuta(this.editarterapeuta)
      .subscribe(
        res=>{
          this.status=true
        },
        err=>{
          this.status=false
        });
  }

}
