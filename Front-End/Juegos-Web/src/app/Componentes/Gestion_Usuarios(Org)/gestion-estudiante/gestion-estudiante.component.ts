import { Component, OnInit } from '@angular/core';
import {EstudianteClass} from "../../../Modelos/EstudianteClass";

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

  constructor() { }

  ngOnInit() {
  }

}
