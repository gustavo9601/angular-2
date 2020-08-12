import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BindingEventosComponent} from './binding-eventos/binding-eventos.component';
import {DirectivasComponent} from './directivas/directivas.component';
import {PipesComponent} from './pipes/pipes.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FormulariosReactiveFormsComponent} from './formularios-reactive-forms/formularios-reactive-forms.component';
import {FormulariosTemplateDrivenFormsComponent} from './formularios-template-driven-forms/formularios-template-driven-forms.component';
import {ServiciosEjemploComponent} from './servicios-ejemplo/servicios-ejemplo.component';


const routes: Routes = [
  {
    path: 'binding-events', component: BindingEventosComponent,
  },
  {
    // Usando lazy loading, pasandole en el load children el modulo que contiene los componentes a cargar persozamente
    path: 'comunicacion-componentes',
    loadChildren: './comunicacion-componentes/comunicacion-componentes.module#ComunicacionComponentesModule'
    //loadChildren: () => import('./comunicacion-componentes/comunicacion-componentes.module').then(m => m.ComunicacionComponentesModule)
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
    path: 'servicios', component: ServiciosEjemploComponent
  },
  {
    path: 'pipes-pruebas/:id/:parametro2', component: PipesComponent,
  },
  {
    path: 'formularios-rf', component: FormulariosReactiveFormsComponent,
  },
  {
    path: 'formularios-tdf', component: FormulariosTemplateDrivenFormsComponent,
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
