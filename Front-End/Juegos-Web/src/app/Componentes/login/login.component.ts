import { Component, OnInit } from '@angular/core';
import {AuthOrganizacionService} from "../../Servicios/Autenticacion/auth-organizacion.service";
import {AuthTerapeutaService} from "../../Servicios/Autenticacion/auth-terapeuta.service";
import {AuthEstudianteService} from "../../Servicios/Autenticacion/auth-estudiante.service";
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //**ATRIBUTOS**//

  //id y nombre de la Organización Logeada
  idOrganizacionLog: string;
  nombreOrganizacion: string;
  tokenOrganizacion:string

  //id y nombre del terapeuta Logeado
  idTerapeutaLog: string;
  nombreTerapeuta: string;

  //id y nombre del estudiante Logeado
  idEstudianteLog: string;
  nombreEstudiante: string;

  //Para el llenado del combobox del tipo de usuarios
  usersSeleccionado: string;
  tipoUsers = [{id: 1, rol: 'Administrador'}, {id: 2, rol: 'Terapeuta'}, {id: 3, rol: 'Estudiante'}];

  //Para realizar las validaciones de ingreso
  ruc_cedula: string;
  contrasenia: string;

  //Para guardar el mensaje del ingreso erroneo de los datos del usuario
  mensajeFallidoIngreso:string

  constructor(private _authOrganizacion: AuthOrganizacionService,
              private _authTerapeuta: AuthTerapeutaService,
              private _authEstudiante: AuthEstudianteService,
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
    //console.log(this.usersSeleccionado);
    if(!this.usersSeleccionado.localeCompare("Administrador") ){
      //console.log("Es administrador");
      this._authOrganizacion.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            console.log(token);
            //console.log(token.idOrganizacion);
            this.idOrganizacionLog=(token.idOrganizacion).toString();
            this.nombreOrganizacion=token.nombreOrganizacion;
            localStorage.setItem('idOrganizacionLog',this.idOrganizacionLog);
            localStorage.setItem('nombreOrganizacion',this.nombreOrganizacion);
            this._router.navigate(['adm/terapeuta']);
          },
          errorServidor=>{
            this.mensajeFallidoIngreso='El ruc o la contraseña son incorrectos';
            //alert("El usuario o la contraseña son incorrectos");
          })

    }else if (!this.usersSeleccionado.localeCompare("Terapeuta")){
      //console.log("Es terapeuta");
      this._authTerapeuta.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            //console.log(token);
            //console.log(token.idTerapeuta);
            this.idTerapeutaLog=(token.idTerapeuta).toString();
            this.nombreTerapeuta=token.nombreTerapeuta;
            localStorage.setItem('idTerapeutaLog',this.idTerapeutaLog);
            localStorage.setItem('nombreTerapeuta',this.nombreTerapeuta)
            this._router.navigate(['saca/sa']);
          },
          errorServidor=>{
            this.mensajeFallidoIngreso='La cédula o la contraseña son incorrectos';
          })

    }else {
      //console.log("Es estudiante");
      this._authEstudiante.logIn(this.ruc_cedula,this.contrasenia)
        .map(res => res.json())
        .subscribe(
          token=>{
            //console.log(token);
            //console.log(token.idEstudiante);
            this.idEstudianteLog=(token.idEstudiante).toString();
            this.nombreEstudiante=token.nombreEstudiante;
            localStorage.setItem('idEstudianteLog',this.idEstudianteLog);
            localStorage.setItem('nombreEstudiante',this.nombreEstudiante)
            this._router.navigate(['juegos/saN1']);
          },
          errorServidor=>{
            this.mensajeFallidoIngreso='La cédula o la contraseña son incorrectos';
          })
    }

  }


}
