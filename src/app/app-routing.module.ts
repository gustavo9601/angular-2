import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BindingEventosComponent} from './binding-eventos/binding-eventos.component';
import {ComunicacionComponentesComponent} from './comunicacion-componentes/comunicacion-componentes.component';
import {DirectivasComponent} from './directivas/directivas.component';
import {PipesComponent} from './pipes/pipes.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'binding-events', component: BindingEventosComponent,
  },
  {
    // Usando lazy loading, pasandole en el load children el modulo que contiene los componentes a cargar persozamente
    path: 'comunicacion-componentes',
    loadChildren: './comunicacion-componentes/comunicacion-componentes.module#ComunicacionComponentesModule'
    // loadChildren: () => import('./../home.module').then(m => m.HomePageModule)

  },
  {
    path: 'directivas', component: DirectivasComponent,
  },
  {
    path: 'pipes', component: PipesComponent,
  },
  {
    path: 'pipes-pruebas/:id', component: PipesComponent,
  },
  {
    path: 'pipes-pruebas/:id/:parametro2', component: PipesComponent,
  },
  {
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
