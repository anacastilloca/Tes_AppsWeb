import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AdmRutasModule} from "./adm-rutas.module";

//Componentes
import {AdmPrincipalComponent} from "./adm-principal.component";
import {GestionTerapeutaComponent} from "../gestion-terapeuta/gestion-terapeuta.component";
import {GestionEstudianteComponent} from "../gestion-estudiante/gestion-estudiante.component";

//Pipes
import { BusquedaPipe } from "../../../Pipes/busqueda.pipe";

@NgModule({
  declarations: [
    AdmPrincipalComponent,
    GestionTerapeutaComponent,
    GestionEstudianteComponent,
    BusquedaPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdmRutasModule,
  ],
  exports:[

  ],
  providers:[

  ]
})

export class AdmModule{}
