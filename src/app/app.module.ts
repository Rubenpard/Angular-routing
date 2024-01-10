import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
    },
  {
    path: 'experiencia',
    component: ExperienciaLaboralComponent
  },
  {
    path: 'conocimientos',
    component: ConocimientosComponent
  },
  {
    path: 'datos',
    component: DatosPersonalesComponent
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
