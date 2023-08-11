import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarHpComponent } from './navbar-hp/navbar-hp.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CasasComponent } from './casas/casas.component';
import { HechizosComponent } from './hechizos/hechizos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHpComponent,
    AlumnosComponent,
    CasasComponent,
    HechizosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
