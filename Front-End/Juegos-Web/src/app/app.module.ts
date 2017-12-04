import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {rutas, appRoutingProviders} from "./app.rutas";

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';

//Servicios
import {UrlPrincipalService} from "./Servicios/url-principal.service";
import {AuthOrganizacionService} from "./Servicios/Autenticacion/auth-organizacion.service";
import {AuthTerapeutaService} from "./Servicios/Autenticacion/auth-terapeuta.service";
import {AuthEstudianteService} from "./Servicios/Autenticacion/auth-estudiante.service";
import {TokenService} from "./Componentes/login/Token/token.service";

//Importar los modulos
import {AdmModule} from "./Componentes/Gestion_Usuarios(Org)/adm-principal/adm.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rutas,
    AdmModule
  ],
  providers: [
    appRoutingProviders,
    UrlPrincipalService,
    AuthOrganizacionService,
    AuthTerapeutaService,
    AuthEstudianteService,
    TokenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
