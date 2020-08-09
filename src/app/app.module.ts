import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingEventosComponent } from './binding-eventos/binding-eventos.component';
import { ComunicacionComponentesComponent } from './comunicacion-componentes/comunicacion-componentes.component';
import { HijoComponent } from './comunicacion-componentes/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingEventosComponent,
    ComunicacionComponentesComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
