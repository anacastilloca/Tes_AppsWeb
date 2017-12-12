import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EstudianteClass} from "../../../../../Modelos/EstudianteClass";
import {EstudianteService} from "../../../Servicios/estudiante.service";
import {TokenService} from "../../../../login/Token/token.service";
import {TerapeutaService} from "../../../Servicios/terapeuta.service";
import {TerapeutaClass} from "../../../../../Modelos/TerapeutaClass";

@Component({
  selector: 'app-agregar-e',
  templateUrl: './agregar-e.component.html',
  styleUrls: ['./agregar-e.component.css']
})
export class AgregarEComponent implements OnInit {

  /*ATRIBUTOS*/

  //Se envia el registro al fronend para que se actualice la tabla
  @Output() agregarEstudianteFrontEnd = new EventEmitter()

  //Para crear el nuevo registro
  estudianteNuevo:EstudianteClass;

  //Para validar si ya existe la cédula
  status:boolean=true;

  //Para obtener la lista de terapeutas
  terapeutas:TerapeutaClass[];

  constructor(private _estudianteService:EstudianteService,
              private _tokenService:TokenService, private _terapeutaService:TerapeutaService) {
    this.estudianteNuevo=new EstudianteClass("");
  }

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

  onSubmit(registerForm){
    this.estudianteNuevo.idOrganizacion=this._tokenService.idOTE;
    this._estudianteService.agregarEstudiante(this.estudianteNuevo)
      .subscribe(
        res=>{
          this.agregarEstudianteFrontEnd.emit(this.estudianteNuevo);
          this.estudianteNuevo= new EstudianteClass("");
          registerForm.reset();

      },
        err=>{
          this.status=false;
          console.log('Error terapeuta', err);
        })
  }

}
