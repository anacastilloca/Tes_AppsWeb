import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";
import {AdmSaCaRutasModule} from "./adm-sa-ca-rutas.module";

//Componentes
import {AdmPrincipalComponent} from "./adm-principal.component";
import {GestionSaComponent} from "../gestion-sa/gestion-sa.component";
import {GestionCaComponent} from "../gestion-ca/gestion-ca.component";
import {AsignacionJuegosEstudianteComponent} from "../asignacion-juegos-estudiante/asignacion-juegos-estudiante.component";
import {AgregarSaComponent} from "../gestion-sa/Pop-up/agregar-sa/agregar-sa.component";
import {EditarSaComponent} from "../gestion-sa/Pop-up/editar-sa/editar-sa.component";
import {EliminarSaComponent} from "../gestion-sa/Pop-up/eliminar-sa/eliminar-sa.component";
import {VerSaComponent} from "../gestion-sa/Pop-up/ver-sa/ver-sa.component";

//Servicios
import {EstudianteService} from "../Servicios/estudiante.service";
import {ComunicacionAlternativaService} from "../Servicios/comunicacion-alternativa.service";
import {SecuenciaAccionesService} from "../Servicios/secuencia-acciones.service";

//Pipes
import {BusquedaPipe} from "../Pipes/busqueda.pipe";

@NgModule({
  declarations: [
    AdmPrincipalComponent,
    GestionSaComponent,
    GestionCaComponent,
    AsignacionJuegosEstudianteComponent,
    BusquedaPipe,
    AgregarSaComponent,
    EditarSaComponent,
    EliminarSaComponent,
    VerSaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdmSaCaRutasModule,
  ],
  exports:[

  ],
  providers:[
    EstudianteService,
    ComunicacionAlternativaService,
    SecuenciaAccionesService,
  ]
})

export class AdmSaCaModule{}
