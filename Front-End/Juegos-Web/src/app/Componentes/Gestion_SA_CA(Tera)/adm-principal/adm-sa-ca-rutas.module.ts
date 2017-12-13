import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {AdmPrincipalComponent} from "./adm-principal.component";
import {GestionSaComponent} from "../gestion-sa/gestion-sa.component";
import {GestionCaComponent} from "../gestion-ca/gestion-ca.component";
import {AsignacionJuegosEstudianteComponent} from "../asignacion-juegos-estudiante/asignacion-juegos-estudiante.component";

const admSaCaRoutes:Routes=[
  {
    path:'admSACA',
    component: AdmPrincipalComponent,
    children:[
      { path:'',redirectTo: 'sa',pathMatch: 'full'  },
      { path:'sa',component: GestionSaComponent },
      { path:'ca',component: GestionCaComponent },
      { path:'asignar',component: AsignacionJuegosEstudianteComponent },
      { path:'**',component: GestionSaComponent  }
    ]
  },
  //
];

@NgModule({
  imports:[
    RouterModule.forChild(admSaCaRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AdmSaCaRutasModule{}
