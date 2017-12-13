import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {EstudianteClass} from "../../../../../Modelos/EstudianteClass";
import {TerapeutaService} from "../../../Servicios/terapeuta.service";
import {TokenService} from "../../../../login/Token/token.service";
import {TerapeutaClass} from "../../../../../Modelos/TerapeutaClass";

@Component({
  selector: 'app-ver-e',
  templateUrl: './ver-e.component.html',
  styleUrls: ['./ver-e.component.css']
})
export class VerEComponent implements OnInit {

  //Para obtener el registro a presentar
  @Input() estudiante:EstudianteClass;



  constructor(private _terapeutaService:TerapeutaService, private _tokenService:TokenService) { }

  ngOnInit() {

  }



}
