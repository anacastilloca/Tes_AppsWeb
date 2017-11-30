import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

//Componentes
import {AdmPrincipalComponent} from "./adm-principal.component";
import {GestionTerapeutaComponent} from "../gestion-terapeuta/gestion-terapeuta.component";
import {GestionEstudianteComponent} from "../gestion-estudiante/gestion-estudiante.component";

const admRoutes:Routes=[
  {
    path:'adm',
    component: AdmPrincipalComponent,
    children:[
      { path:'',redirectTo: 'terapeuta',pathMatch: 'full'  },
      { path:'terapeuta',component: GestionTerapeutaComponent },
      { path:'estudiante',component: GestionEstudianteComponent },
      { path:'**',component: GestionTerapeutaComponent  }
    ]
  },
 //
];

@NgModule({
  imports:[
    RouterModule.forChild(admRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AdmRutasModule{}
