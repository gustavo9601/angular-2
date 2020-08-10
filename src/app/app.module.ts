import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BindingEventosComponent} from './binding-eventos/binding-eventos.component';
import {ComunicacionComponentesComponent} from './comunicacion-componentes/comunicacion-componentes.component';
import {HijoComponent} from './comunicacion-componentes/hijo/hijo.component';
import {DirectivasComponent} from './directivas/directivas.component';
import {DirectivaPersonalizadaDirective} from './directivas/directiva-personalizada.directive';
import {PipesComponent} from './pipes/pipes.component';
import {PipePersonalizadoPipe} from './pipes/pipe-personalizado.pipe';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'binding-events', component: BindingEventosComponent,
  },
  {
    path: 'comunicacion-componentes', component: ComunicacionComponentesComponent,
  }
  ,
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
  declarations: [
    AppComponent,
    BindingEventosComponent,
    ComunicacionComponentesComponent,
    HijoComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective,
    PipesComponent,
    PipePersonalizadoPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
