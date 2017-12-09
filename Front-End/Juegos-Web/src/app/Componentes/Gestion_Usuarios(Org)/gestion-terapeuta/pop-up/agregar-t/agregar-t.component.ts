import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TerapeutaClass} from "../../../../../Modelos/TerapeutaClass";
import {TokenService} from "../../../../login/Token/token.service";
import {TerapeutaService} from "../../../Servicios/terapeuta.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-agregar-t',
  templateUrl: './agregar-t.component.html',
  styleUrls: ['./agregar-t.component.css']
})
export class AgregarTComponent implements OnInit {

  /**ATRIBUTOS**/

  //Se envia el registro al frontend
  @Output() agregarTerapeutaFrontEnd = new EventEmitter();

  //Para crear el registro de un terapeuta
  terapeutaNuevo:TerapeutaClass;
  teraAux:any;


  constructor(private _tokenService:TokenService, private _terapeutaService:TerapeutaService,
              private _router: Router) {
    this.terapeutaNuevo=new TerapeutaClass("");
  }

  ngOnInit() {

  }

  agregarTerapeuta(){
    console.log(this.terapeutaNuevo);
    this.teraAux=this.terapeutaNuevo;
    this.teraAux.idOrganizacion=this._tokenService.idOTE;
    this._terapeutaService.agregarTerapeuta(this.teraAux)
      .subscribe(
        (terapeutaCreado:TerapeutaClass)=>{
          terapeutaCreado=new TerapeutaClass("")
          console.log('ss',terapeutaCreado)
          this.agregarTerapeutaFrontEnd.emit(this.terapeutaNuevo)
        }
      );

  }

}
