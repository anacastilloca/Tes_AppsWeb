import {Component, Input, OnInit} from '@angular/core';
import {EstudianteClass} from "../../../../../Modelos/EstudianteClass";
import {EstudianteService} from "../../../Servicios/estudiante.service";
import {TerapeutaService} from "../../../Servicios/terapeuta.service";
import {TerapeutaClass} from "../../../../../Modelos/TerapeutaClass";
import {TokenService} from "../../../../login/Token/token.service";

@Component({
  selector: 'app-editar-e',
  templateUrl: './editar-e.component.html',
  styleUrls: ['./editar-e.component.css']
})
export class EditarEComponent implements OnInit {

  /**ATRIBUTOS**/

  //Para obtener el registroa editar
  @Input() estudiante: EstudianteClass;

  //Para validar la actualización de los datos
  status:boolean;

  //Para obtener la lista de terapeutas
  terapeutas:TerapeutaClass[];



  constructor(private _estudianteService:EstudianteService,
              private _terapeutaService:TerapeutaService,
              private _tokenService:TokenService) { }

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

  onSubmit(){
    this._estudianteService.actualizarEstudiante(this.estudiante)
      .subscribe(
        res=>{
          this.status=true;
        },
        err=>{
          this.status=false;
        })
  }

}
