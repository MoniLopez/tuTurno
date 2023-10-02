import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarrafonComponent } from './garrafon/garrafon/garrafon.component';
import { PrincipalComponent } from './principal/principal.component';
import { LimpiezaComponent } from './limpieza/limpieza/limpieza.component';
import { CumpleComponent } from './cumple/cumple/cumple.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent}, //SIEMPRE se agrega una ruta para la página principal
  { path:'rolAgua', component: GarrafonComponent },
  { path:'rolLimpieza', component: LimpiezaComponent},
  { path:'ordenCumple', component: CumpleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }