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
  terapeutaNuevo: TerapeutaClass;

  //Para validar si ya exite la cédula
  status:boolean=true;


  constructor(private _tokenService: TokenService, private _terapeutaService: TerapeutaService,
              private _router: Router) {
    this.terapeutaNuevo = new TerapeutaClass("", "", "", "", "", 0, "");
  }

  ngOnInit() {

  }

  onSubmit(registerForm) {
    console.log('Terapeuta Ingresado', this.terapeutaNuevo);
    this.terapeutaNuevo.idOrganizacion = this._tokenService.idOTE;
    this._terapeutaService.agregarTerapeuta(this.terapeutaNuevo)
      .subscribe(
        response => {
            this.agregarTerapeutaFrontEnd.emit(this.terapeutaNuevo)
            this.terapeutaNuevo = new TerapeutaClass("", "", "", "", "", 0, "");
            registerForm.reset();
        },
        err => {
          this.status = false;
          console.log('Error terapeuta', err);
        }
      );

  }
}
