import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alumnos', component: AlumnosComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `firs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
