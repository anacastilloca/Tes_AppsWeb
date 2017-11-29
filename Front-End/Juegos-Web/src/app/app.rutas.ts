import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {LoginComponent} from "./Componentes/login/login.component";

const appRoutes:Routes = [

  //{ path:'',component: LoginComponent },
  { path:'',redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  //{ path:'**',component: LoginComponent  }


]

export const appRoutingProviders: any[]=[];
export const rutas:ModuleWithProviders=RouterModule.forRoot(appRoutes )
