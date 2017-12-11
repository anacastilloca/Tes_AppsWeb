import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AdmRutasModule} from "./adm-rutas.module";

//Componentes
import {AdmPrincipalComponent} from "./adm-principal.component";
import {GestionTerapeutaComponent} from "../gestion-terapeuta/gestion-terapeuta.component";
import {GestionEstudianteComponent} from "../gestion-estudiante/gestion-estudiante.component";
import {AgregarTComponent} from "../gestion-terapeuta/pop-up/agregar-t/agregar-t.component";
import {EditarTComponent} from "../gestion-terapeuta/pop-up/editar-t/editar-t.component";
import {EliminarTComponent} from "../gestion-terapeuta/pop-up/eliminar-t/eliminar-t.component";
import {VerTComponent} from "../gestion-terapeuta/pop-up/ver-t/ver-t.component";
import {AgregarEComponent} from "../gestion-estudiante/Pop-up/agregar-e/agregar-e.component";
import {EditarEComponent} from "../gestion-estudiante/Pop-up/editar-e/editar-e.component";
import {VerEComponent} from "../gestion-estudiante/Pop-up/ver-e/ver-e.component";
import {EliminarEComponent} from "../gestion-estudiante/Pop-up/eliminar-e/eliminar-e.component";

//Pipes
import {BusquedaPipe} from "../Pipes/busqueda.pipe";

//Servicios
import {EstudianteService} from "../Servicios/estudiante.service";
import {TerapeutaService} from "../Servicios/terapeuta.service";

@NgModule({
  declarations: [
    AdmPrincipalComponent,
    GestionTerapeutaComponent,
    GestionEstudianteComponent,
    BusquedaPipe,
    AgregarTComponent,
    EditarTComponent,
    EliminarTComponent,
    VerTComponent,
    AgregarEComponent,
    EditarEComponent,
    VerEComponent,
    EliminarEComponent,

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
    EstudianteService,
    TerapeutaService,

  ]
})

export class AdmModule{}
