import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {rutas, appRoutingProviders} from "./app.rutas";

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';

//Servicios
import {UrlPrincipalService} from "./Servicios/url-principal.service";
import {AuthOrganizacionService} from "./Servicios/Autenticacion/auth-organizacion.service";
import {AuthTerapeutaService} from "./Servicios/Autenticacion/auth-terapeuta.service";
import {AuthEstudianteService} from "./Servicios/Autenticacion/auth-estudiante.service";
import { AdmPrincipalComponent } from './Componentes/Gestion_Usuarios(Org)/adm-principal/adm-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmPrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    rutas,
  ],
  providers: [
    appRoutingProviders,
    UrlPrincipalService,
    AuthOrganizacionService,
    AuthTerapeutaService,
    AuthEstudianteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
