import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CasasComponent } from './casas/casas.component';
import { HechizosComponent } from './hechizos/hechizos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'casas', component: CasasComponent },
  {path: 'hechizos', component: HechizosComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `firs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
