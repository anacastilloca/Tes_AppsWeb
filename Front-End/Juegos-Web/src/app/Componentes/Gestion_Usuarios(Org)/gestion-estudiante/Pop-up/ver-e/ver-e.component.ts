import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {EstudianteClass} from "../../../../../Modelos/EstudianteClass";

@Component({
  selector: 'app-ver-e',
  templateUrl: './ver-e.component.html',
  styleUrls: ['./ver-e.component.css']
})
export class VerEComponent implements OnInit, DoCheck {

  //Para obtener el registro a presentar
  @Input() estudiante:EstudianteClass;

  nombreTerapeuta:string;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.nombreTerapeuta=this.estudiante.idTerapeuta['nombre'];
  }

}
