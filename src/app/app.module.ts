import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingEventosComponent } from './binding-eventos/binding-eventos.component';
import { ComunicacionComponentesComponent } from './comunicacion-componentes/comunicacion-componentes.component';
import { HijoComponent } from './comunicacion-componentes/hijo/hijo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import {DirectivaPersonalizadaDirective} from './directivas/directiva-personalizada.directive';
import { PipesComponent } from './pipes/pipes.component';
import { PipePersonalizadoPipe } from './pipes/pipe-personalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindingEventosComponent,
    ComunicacionComponentesComponent,
    HijoComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective,
    PipesComponent,
    PipePersonalizadoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
