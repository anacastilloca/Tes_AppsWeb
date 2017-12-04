import { Component, OnInit } from '@angular/core';
import {TerapeutaClass} from "../../../Modelos/TerapeutaClass";

@Component({
  selector: 'app-gestion-terapeuta',
  templateUrl: './gestion-terapeuta.component.html',
  styleUrls: ['./gestion-terapeuta.component.css']
})
export class GestionTerapeutaComponent implements OnInit {

  /**ATRIBUTOS**/

  //Para realizar la búsqueda por el nombre de los terapeutas
  busquedaPorNombre:string;

  //Para obtener los datos de los terrapeutas
  terapeuta:TerapeutaClass= new TerapeutaClass("");
  terapeutas:TerapeutaClass[]=[];

  constructor() { }

  ngOnInit() {
  }

}
