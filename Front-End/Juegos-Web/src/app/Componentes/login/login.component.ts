import { Component, OnInit } from '@angular/core';
import {AuthOrganizacionService} from "../../Servicios/Autenticacion/auth-organizacion.service";
import {AuthTerapeutaService} from "../../Servicios/Autenticacion/auth-terapeuta.service";
import {AuthEstudianteService} from "../../Servicios/Autenticacion/auth-estudiante.service";
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';
import {TokenService} from "./Token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //**ATRIBUTOS**//

  //Para el llenado del combobox del tipo de usuarios
  usersSeleccionado: string='Administrador';
  tipoUsers = [{rol: 'Administrador'}, {rol: 'Terapeuta'}, {rol: 'Estudiante'}];

  //Para realizar las validaciones de ingreso
  ruc_cedula: string;
  contrasenia: string;

  //Para validar el ingreso del usuario
  estaLogeado:boolean=true;

  constructor(private _authOrganizacion: AuthOrganizacionService,
              private _authTerapeuta: AuthTerapeutaService,
              private _authEstudiante: AuthEstudianteService,
              private _tokenService:TokenService,
              private _router: Router) {
  }

  ngOnInit() {

  }

  //Método que devuelve el usuario seleccionado
  onChange(userSelec){
    this.usersSeleccionado=userSelec;
  }

  //Método para la validación de los datos del usuario, dependiendo el tipo de usuario que sea
  ingresarUsuario(){
    if(!this.usersSeleccionado.localeCompare("Administrador") ){
      console.log("Es administrador");
      this._authOrganizacion.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            this._tokenService.token=token.token;
            this._tokenService.idOTE=token.idOrganizacion.toString();
            this._tokenService.nombreOTE=token.nombreOrganizacion;
            this._router.navigate(['adm/terapeuta']);
            this.estaLogeado=true;
          },
          errorServidor=>{
            this.estaLogeado=false;

          });
    }else if (!this.usersSeleccionado.localeCompare("Terapeuta")){
      //console.log("Es terapeuta");
      this._authTerapeuta.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            localStorage.setItem('token', this._tokenService.token)
            this._tokenService.token=token.token;
            this._tokenService.idOTE=token.idTerapeuta.toString();
            this._tokenService.nombreOTE=token.nombreTerapeuta;
            this._router.navigate(['saca/sa']);
            this.estaLogeado=true;
          },
          errorServidor=>{
            this.estaLogeado=false;
          })

    }else {
      //console.log("Es estudiante");
      this._authEstudiante.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            this._tokenService.token=token.token;
            this._tokenService.idOTE=token.idEstudiante.toString();
            this._tokenService.nombreOTE=token.nombreEstudiante;
            this._router.navigate(['juegos/saN1']);
            this.estaLogeado=true;
          },
          errorServidor=>{
            this.estaLogeado=false;
          })
    }
  }

}
