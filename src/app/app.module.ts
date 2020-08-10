import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BindingEventosComponent} from './binding-eventos/binding-eventos.component';

import {DirectivasComponent} from './directivas/directivas.component';
import {DirectivaPersonalizadaDirective} from './directivas/directiva-personalizada.directive';
import {PipesComponent} from './pipes/pipes.component';
import {PipePersonalizadoPipe} from './pipes/pipe-personalizado.pipe';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {ComunicacionComponentesModule} from './comunicacion-componentes/comunicacion-componentes.module';


@NgModule({
  declarations: [
    AppComponent,
    BindingEventosComponent,
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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
